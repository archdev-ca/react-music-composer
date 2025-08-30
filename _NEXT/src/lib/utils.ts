function getPianoFrequencies(key, octave, accidental = '') {
  // Reference frequency for A4 (440 Hz)
  const A4_FREQUENCY = 440;

  // Mapping note names to semitone offsets from A4
  const NOTE_OFFSETS: { [key: string]: number } = {
    C: -9,
    'C#': -8,
    Db: -8,
    D: -7,
    'D#': -6,
    Eb: -6,
    E: -5,
    F: -4,
    'F#': -3,
    Gb: -3,
    G: -2,
    'G#': -1,
    Ab: -1,
    A: 0,
    'A#': 1,
    Bb: 1,
    B: 2
  };

  // Combine key and accidental (e.g., "C#" or "Bb")
  let noteName = key + accidental;

  // Check if the note is valid
  if (!(noteName in NOTE_OFFSETS)) {
    throw new Error(`Invalid note: ${noteName}`);
  }

  // Calculate the base frequency using the equal-tempered scale formula
  let semitoneOffset = NOTE_OFFSETS[noteName] + (octave - 4) * 12;
  let fundamental = A4_FREQUENCY * Math.pow(2, semitoneOffset / 12);

  // Generate harmonic frequencies (fundamental + first 3 harmonics)
  let harmonics = [
    fundamental, // Fundamental frequency
    fundamental * 2, // 2nd harmonic (1 octave up)
    fundamental * 3, // 3rd harmonic (perfect fifth)
    fundamental * 4 // 4th harmonic (2 octaves up)
  ];

  return harmonics;
}

const playC4Note = (duration = 1) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const gainNode = audioContext.createGain();

  const frequencies = [261.63, 523.26, 1046.52, 2093.04]; // Fundamental + harmonics
  const oscillators = frequencies.map((freq, i) => {
    const osc = audioContext.createOscillator();
    osc.type = i === 0 ? 'sine' : 'sawtooth'; // Use sine for fundamental, sawtooth for harmonics
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
    osc.connect(gainNode);
    return osc;
  });

  // Simulate piano envelope (Attack, Decay)
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.01); // Quick attack
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration); // Smooth fade

  gainNode.connect(audioContext.destination);

  // Start and stop oscillators
  oscillators.forEach((osc) => osc.start());
  oscillators.forEach((osc) => osc.stop(audioContext.currentTime + duration));
};
