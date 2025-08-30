// export type Note =
//   | {
//       key: 'a' | 'b';
//       octave: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
//       accidental: 1 | -1;
//     }
//   | {
//       key: 'c';
//       octave: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
//       accidental: 1 | -1;
//     }
//   | {
//       key: 'd' | 'e' | 'f' | 'g';
//       octave: 1 | 2 | 3 | 4 | 5 | 6 | 7;
//       accidental: 1 | -1;
//     };
export type Clef = 'treble' | 'bass';

export interface Note {
  key: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
  octave: number;
  accidental: -1 | 0 | 1;
}
export interface Beat {
  rest: boolean;
  notes: Note[];
  span: number;
}

export interface Bar {
  clef: Clef;
  beats: Beat[];
}

// <GrandStaff>
//   <Staff clef='treble'>
//     <Bar clef='treble' beats=[...] />
//     <Bar clef='treble' beats=[...] />
//     <Bar clef='treble' beats=[...] />
//     <Bar clef='treble' beats=[...] />
//   </>
//   <Staff clef='bass'>
//     <Bar clef='bass' beats=[...] />
//     <Bar clef='bass' beats=[...] />
//     <Bar clef='bass' beats=[...] />
//     <Bar clef='bass' beats=[...] />
//   </Staff>
// </GrandStaff>

// <GrandStaff>
//   <Staff clef='treble'>
//     <Bar clef='treble' beats=[...] />
//     <Bar clef='treble' beats=[...] />
//     <Bar clef='treble' beats=[...] />
//     <Bar clef='treble' beats=[...] />
//   </>
//   <Staff clef='bass'>
//     <Bar clef='bass' beats=[...] />
//     <Bar clef='bass' beats=[...] />
//     <Bar clef='bass' beats=[...] />
//     <Bar clef='bass' beats=[...] />
//   </Staff>
// </GrandStaff>
