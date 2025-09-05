import type { HarmonicNotePreset, PlaybackEvent, PlayOptions, Score } from '../../types';

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export const playNote = (ctx: AudioContext, preset: HarmonicNotePreset, opts: PlayOptions = {}) => {
  const now = ctx.currentTime + (opts.when ?? 0);
  const velocity = clamp(opts.velocity ?? 0.9, 0.05, 1);
  const masterGainVal = clamp((preset.masterGain ?? 0.7) * velocity, 0, 1);

  // Nodes: master → filters → destination
  const master = ctx.createGain();
  master.gain.value = masterGainVal;

  // Filters
  let chainTail: AudioNode = master;
  const nodesToDisconnect: AudioNode[] = [master];

  // Optional high-shelf first
  if (preset.filters?.highShelfHz && typeof preset.filters.highShelfGain === 'number') {
    const hs = ctx.createBiquadFilter();
    hs.type = 'highshelf';
    hs.frequency.value = preset.filters.highShelfHz;
    hs.gain.value = preset.filters.highShelfGain;
    chainTail.connect(hs);
    chainTail = hs;
    nodesToDisconnect.push(hs);
  }

  // Optional LPF next
  if (preset.filters?.lpfHz) {
    const lpf = ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.frequency.value = preset.filters.lpfHz;
    chainTail.connect(lpf);
    chainTail = lpf;
    nodesToDisconnect.push(lpf);
  }

  chainTail.connect(ctx.destination);

  // Build partials
  const oscNodes: OscillatorNode[] = [];
  const gNodes: GainNode[] = [];

  const env = preset.envelope;
  const total = Math.min(env.tail, opts.duration ?? env.tail);
  const B = preset.inharmonicityB ?? 0;

  for (let i = 0; i < preset.partials.length; i++) {
    const p = preset.partials[i];
    const osc = ctx.createOscillator();
    const g = ctx.createGain();

    osc.type = p.type;

    // Inharmonic stretch + tiny randomized detune
    const centsSpread = p.detuneCentsSpread ?? (i === 0 ? 1 : 6);
    const detuneCents = (Math.random() * 2 - 1) * centsSpread * (i === 0 ? 0.5 : 1);
    const stretch = 1 + B * p.n * p.n;
    const freq = preset.fundHz * p.n * stretch * Math.pow(2, detuneCents / 1200);
    osc.frequency.setValueAtTime(freq, now);

    // Per-partial envelope: quick attack → quick decay → long expo tail
    const peak = p.amp; // masterGain already scales velocity
    const sustain = peak * env.decayDrop;
    const endTime = now + Math.min(p.decay + 0.4, total);
    const attackEnd = now + env.attack;
    const decayEnd = attackEnd + env.decayTime;

    g.gain.setValueAtTime(0.0001, now);
    g.gain.linearRampToValueAtTime(peak, attackEnd);
    g.gain.exponentialRampToValueAtTime(sustain, decayEnd);
    g.gain.exponentialRampToValueAtTime(0.0001, endTime);

    // Chain
    osc.connect(g).connect(master);

    const stagger = p.phaseStagger ?? i * 0.0015;
    osc.start(now + stagger);
    osc.stop(now + total + 0.1);

    oscNodes.push(osc);
    gNodes.push(g);
  }

  // Optional hammer transient
  if (preset.hammer?.enable) {
    const dur = preset.hammer.dur;
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    const ch = buffer.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = (Math.random() * 2 - 1) * 0.6;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = preset.hammer.bandHz;
    bp.Q.value = preset.hammer.q;

    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.0001, now);
    ng.gain.linearRampToValueAtTime(preset.hammer.gain * velocity, now + 0.004);
    ng.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    noise.connect(bp).connect(ng).connect(master);
    noise.start(now);
    noise.stop(now + dur + 0.02);
    nodesToDisconnect.push(bp, ng);
  }

  return {
    stop() {
      try {
        oscNodes.forEach((o) => o.stop());
      } catch {}
      // disconnect to help GC
      try {
        nodesToDisconnect.forEach((n) => (n as any).disconnect?.());
      } catch {}
    }
  };
};

export function secondsPerTick(ppq: number, tempoBPM: number) {
  // quarter note sec = 60/tempo; ticks per quarter = ppq
  return 60 / tempoBPM / ppq;
}
export function ticksPerMeasure(ppq: number, ts: { num: number; den: number }) {
  const ticksPerQuarter = ppq;
  const beatAsQuarter = 4 / ts.den; // e.g., 4/4 => 1, 6/8 => 0.5 (eighth is a half quarter)
  const ticksPerBeat = ticksPerQuarter * beatAsQuarter;
  return ticksPerBeat * ts.num;
}

export function flattenScoreToEvents(score: Score): PlaybackEvent[] {
  const spt = secondsPerTick(score.meta.ppq, score.meta.tempoBPM);

  // Ensure chronological measure order
  const measures = [...score.measures].sort((a, b) => a.index - b.index);

  let globalTick = 0;
  const events: PlaybackEvent[] = [];

  for (const m of measures) {
    const tpm = ticksPerMeasure(score.meta.ppq, m.timeSignature);

    // For each staff
    for (const staffKey of ['treble', 'bass'] as const) {
      const staff = m.staves[staffKey];
      if (!staff || !Array.isArray(staff.bars)) continue;

      // Your schema typically has 1 bar per staff per measure, but we support many:
      staff.bars.forEach((bar, barIndex) => {
        let localTick = 0; // within this measure for this staff

        bar.beats.forEach((beat, beatIndex) => {
          const startTick = globalTick + localTick;
          const endTick = startTick + beat.span;

          if (!beat.rest && beat.notes && beat.notes.length > 0) {
            events.push({
              measureId: m.id,
              staff: staffKey,
              barIndex,
              beatIndex,
              startTick,
              endTick,
              startTimeSec: startTick * spt,
              endTimeSec: endTick * spt,
              duration: beat.duration,
              notes: beat.notes
            });
          }

          localTick += beat.span;
        });

        // Optional sanity: ensure localTick === tpm for this staff/bar
        // (In your data, treble and bass each should sum to tpm.)
      });
    }

    globalTick += tpm; // advance global clock to next measure
  }

  // Sort by startTick to ensure strict chronological order (ties = simultaneous)
  events.sort((a, b) => a.startTick - b.startTick);

  return events;
}

export function flattenMeasuresToEvents(score: Score, measureIds: string[]): PlaybackEvent[] {
  const spt = secondsPerTick(score.meta.ppq, score.meta.tempoBPM);
  const byId = new Map(score.measures.map((m) => [m.id, m]));

  let globalTick = 0;
  const events: PlaybackEvent[] = [];

  for (const id of measureIds) {
    const m = byId.get(id);
    if (!m) continue;
    const tpm = ticksPerMeasure(score.meta.ppq, m.timeSignature);

    for (const staffKey of ['treble', 'bass'] as const) {
      const staff = m.staves[staffKey];
      if (!staff || !Array.isArray(staff.bars)) continue;

      staff.bars.forEach((bar, barIndex) => {
        let localTick = 0;
        bar.beats.forEach((beat, beatIndex) => {
          const startTick = globalTick + localTick;
          const endTick = startTick + beat.span;

          if (!beat.rest && beat.notes?.length) {
            events.push({
              measureId: m.id,
              staff: staffKey,
              barIndex,
              beatIndex,
              startTick,
              endTick,
              startTimeSec: startTick * spt,
              endTimeSec: endTick * spt,
              duration: beat.duration,
              notes: beat.notes
            });
          }
          localTick += beat.span;
        });
      });
    }

    globalTick += tpm;
  }

  events.sort((a, b) => a.startTick - b.startTick);
  return events;
}
