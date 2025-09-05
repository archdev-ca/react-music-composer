export type NoteDuration = 1 | 2 | 4 | 8 | 16;
export type NoteKey =
  | 'a0'
  | 'b0'
  | 'c1'
  | 'd1'
  | 'e1'
  | 'f1'
  | 'g1'
  | 'a1'
  | 'b1'
  | 'c2'
  | 'd2'
  | 'e2'
  | 'f2'
  | 'g2'
  | 'a2'
  | 'b2'
  | 'c3'
  | 'd3'
  | 'e3'
  | 'f3'
  | 'g3'
  | 'a3'
  | 'b3'
  | 'c4'
  | 'd4'
  | 'e4'
  | 'f4'
  | 'g4'
  | 'a4'
  | 'b4'
  | 'c5'
  | 'd5'
  | 'e5'
  | 'f5'
  | 'g5'
  | 'a5'
  | 'b5'
  | 'c6'
  | 'd6'
  | 'e6'
  | 'f6'
  | 'g6'
  | 'a6'
  | 'b6'
  | 'c7'
  | 'd7'
  | 'e7'
  | 'f7'
  | 'g7'
  | 'a7'
  | 'b7'
  | 'c8';
export type Clef = 'treble' | 'bass';
export interface Note {
  key: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
  octave: number;
  accidental: -1 | 0 | 1; // consider allowing 0 for naturals
}
export interface Beat {
  rest: boolean;
  notes: Note[]; // chord if length > 1
  span: number; // ticks (ppq-based)
  duration: NoteDuration;
}
export interface Bar {
  clef: Clef;
  beats: Beat[]; // sum(span) === totalTicksForMeasure
}

export interface Measure {
  id: string;
  index: number;
  timeSignature: { num: number; den: number };
  staves: {
    treble: { clef: 'treble'; bars: Bar[] }; // one bar per staff per measure
    bass: { clef: 'bass'; bars: Bar[] };
  };
}

export interface Score {
  meta: { title: string; composer: string; tempoBPM: number; keySignature: string; ppq: number };
  measures: Measure[];
  systems: { index: number; measureIds: string[] }[];
}
export type OscType = OscillatorType;

export interface PartialSpec {
  /** Harmonic index: 1=fundamental, 2=2nd partial, 3=3rd… */
  n: number;
  type: OscType;
  /** Relative amp (0..1). Overall loudness still scaled by velocity & masterGain */
  amp: number;
  /** Seconds (approx) for this partial’s tail — higher partials decay faster */
  decay: number;
  /** Random detune range (+/- cents) applied per start to reduce “organ” purity */
  detuneCentsSpread?: number;
  /** Extra start offset in seconds, to stagger partial onsets slightly */
  phaseStagger?: number;
}

export interface EnvelopeSpec {
  /** Fast attack for hammer strike (s) */
  attack: number;
  /** Drop to this % of peak after attack (0..1) */
  decayDrop: number;
  /** Time to reach decayDrop after attack (s) */
  decayTime: number;
  /** Long tail end time (total) from start (s) */
  tail: number;
}

export interface FiltersSpec {
  /** Gentle LPF to tame highs */
  lpfHz?: number; // e.g., 9000
  /** Optional high-shelf dip after the initial brightness */
  highShelfHz?: number; // e.g., 6000
  highShelfGain?: number; // e.g., -2.5 dB
}

export interface HammerSpec {
  enable: boolean;
  /** Band-pass center for hammer “thock” */
  bandHz: number; // e.g., 2500
  q: number; // e.g., 2.0
  gain: number; // 0..1
  dur: number; // ~0.02–0.05 s
}

export interface HarmonicNotePreset {
  name: string;
  fundHz: number;
  /** Tiny inharmonicity stretch: freq = fund * n * (1 + B * n^2) */
  inharmonicityB?: number; // e.g., 0.0003
  partials: PartialSpec[];
  envelope: EnvelopeSpec;
  filters?: FiltersSpec;
  hammer?: HammerSpec;
  /** Overall preset loudness scaler (0..1) */
  masterGain?: number;
}

/** Playback options you can vary per call */
export interface PlayOptions {
  when?: number; // seconds from now
  velocity?: number; // 0..1
  duration?: number; // hard ceiling for note length (s). Defaults to preset tail.
}

/** Handle you can stop early if needed */
export interface PlayHandle {
  stop(): void;
}

export type PlaybackEvent = {
  measureId: string;
  staff: Clef;
  barIndex: number;
  beatIndex: number;
  startTick: number;
  endTick: number;
  startTimeSec: number;
  endTimeSec: number;
  duration: 1 | 2 | 4 | 8 | 16;
  notes: Note[];
};
