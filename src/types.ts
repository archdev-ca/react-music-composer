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
    treble: { clef: 'treble'; bars: [Bar] }; // one bar per staff per measure
    bass: { clef: 'bass'; bars: [Bar] };
  };
}

export interface Score {
  meta: { title: string; composer: string; tempoBPM: number; keySignature: string; ppq: number };
  measures: Measure[];
  systems: { index: number; measureIds: string[] }[];
}
