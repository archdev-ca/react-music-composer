import { Box, Button } from '@mui/material';
import Staff from '../../features/composer/staff';
import DefaultLayout from '../../layouts/default';
import type { Bar, Clef, HarmonicNotePreset, Measure, Score } from '../../types';
import { playNote } from '../../features/player/utils';

type Props = {};

// const TempData: Score = {
//   meta: {
//     title: 'Ode to Joy (simplified)',
//     composer: 'L. v. Beethoven',
//     tempoBPM: 96,
//     keySignature: 'C',
//     ppq: 480
//   },
//   measures: [
//     {
//       id: 'm0',
//       index: 0,
//       timeSignature: { num: 4, den: 4 },
//       staves: {
//         treble: {
//           clef: 'treble',
//           bars: [
//             {
//               clef: 'treble',
//               beats: [
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'c', octave: 4, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'd', octave: 4, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'e', octave: 4, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'f', octave: 4, accidental: 0 }]
//                 }
//               ]
//             },
//             {
//               clef: 'treble',
//               beats: [
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'g', octave: 4, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'a', octave: 4, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'b', octave: 4, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'c', octave: 5, accidental: 0 }]
//                 }
//               ]
//             },
//             {
//               clef: 'treble',
//               beats: [
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'd', octave: 5, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'e', octave: 5, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'f', octave: 5, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'g', octave: 5, accidental: 0 }]
//                 }
//               ]
//             },
//             {
//               clef: 'treble',
//               beats: [
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'a', octave: 5, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'b', octave: 5, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'c', octave: 6, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'd', octave: 6, accidental: 0 }]
//                 }
//               ]
//             },
//             {
//               clef: 'treble',
//               beats: [
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'e', octave: 6, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'f', octave: 6, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'g', octave: 6, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'a', octave: 6, accidental: 0 }]
//                 }
//               ]
//             },
//             {
//               clef: 'treble',
//               beats: [
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'b', octave: 6, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'f', octave: 5, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'g', octave: 4, accidental: 0 }]
//                 },
//                 {
//                   rest: false,
//                   duration: 4,
//                   span: 480,
//                   notes: [{ key: 'a', octave: 5, accidental: 0 }]
//                 }
//               ]
//             }
//           ]
//         },
//         bass: {
//           clef: 'bass',
//           bars: [
//             {
//               clef: 'bass',
//               beats: [
//                 {
//                   rest: false,
//                   duration: 1,
//                   span: 1920,
//                   notes: [{ key: 'c', octave: 3, accidental: 0 }]
//                 }
//               ]
//             }
//           ]
//         }
//       }
//     }
//   ],
//   systems: [
//     { index: 0, measureIds: ['m0', 'm1', 'm2', 'm3'] },
//     { index: 1, measureIds: ['m4', 'm5', 'm6', 'm7'] }
//   ]
// };

const TempData: Score = {
  meta: {
    title: 'Ode to Joy (simplified)',
    composer: 'L. v. Beethoven',
    tempoBPM: 96,
    keySignature: 'C',
    ppq: 480
  },
  measures: [
    {
      id: 'm0',
      index: 0,
      timeSignature: { num: 4, den: 4 },
      staves: {
        treble: {
          clef: 'treble',
          bars: [
            {
              clef: 'treble',
              beats: [
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'e', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'e', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'f', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'g', octave: 4, accidental: 0 }]
                }
              ]
            }
          ]
        },
        bass: {
          clef: 'bass',
          bars: [
            {
              clef: 'bass',
              beats: [
                {
                  rest: false,
                  duration: 1,
                  span: 1920,
                  notes: [{ key: 'c', octave: 3, accidental: 0 }]
                }
              ]
            }
          ]
        }
      }
    },
    {
      id: 'm1',
      index: 1,
      timeSignature: { num: 4, den: 4 },
      staves: {
        treble: {
          clef: 'treble',
          bars: [
            {
              clef: 'treble',
              beats: [
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'g', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'f', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'e', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'd', octave: 4, accidental: 0 }]
                }
              ]
            }
          ]
        },
        bass: {
          clef: 'bass',
          bars: [
            {
              clef: 'bass',
              beats: [
                {
                  rest: false,
                  duration: 1,
                  span: 1920,
                  notes: [{ key: 'g', octave: 2, accidental: 0 }]
                }
              ]
            }
          ]
        }
      }
    },
    {
      id: 'm2',
      index: 2,
      timeSignature: { num: 4, den: 4 },
      staves: {
        treble: {
          clef: 'treble',
          bars: [
            {
              clef: 'treble',
              beats: [
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'c', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'c', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'd', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'e', octave: 4, accidental: 0 }]
                }
              ]
            }
          ]
        },
        bass: {
          clef: 'bass',
          bars: [
            {
              clef: 'bass',
              beats: [
                {
                  rest: false,
                  duration: 1,
                  span: 1920,
                  notes: [{ key: 'c', octave: 3, accidental: 0 }]
                }
              ]
            }
          ]
        }
      }
    },
    {
      id: 'm3',
      index: 3,
      timeSignature: { num: 4, den: 4 },
      staves: {
        treble: {
          clef: 'treble',
          bars: [
            {
              clef: 'treble',
              beats: [
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'e', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 4,
                  span: 480,
                  notes: [{ key: 'd', octave: 4, accidental: 0 }]
                },
                {
                  rest: false,
                  duration: 2,
                  span: 960,
                  notes: [{ key: 'd', octave: 4, accidental: 0 }]
                }
              ]
            }
          ]
        },
        bass: {
          clef: 'bass',
          bars: [
            {
              clef: 'bass',
              beats: [
                {
                  rest: false,
                  duration: 1,
                  span: 1920,
                  notes: [{ key: 'g', octave: 2, accidental: 0 }]
                }
              ]
            }
          ]
        }
      }
    }
    // …continue through m7 etc.
  ],
  systems: [
    { index: 0, measureIds: ['m0', 'm1', 'm2', 'm3'] },
    { index: 1, measureIds: ['m4', 'm5', 'm6', 'm7'] }
  ]
};

export function getBarsByMeasureIdsForClef(score: any, measureIds: string[], clef: Clef): Bar[] {
  const byId = new Map(score.measures.map((m: Measure) => [m.id, m]));
  const out: Bar[] = [];

  for (const id of measureIds) {
    const measure: Measure = byId.get(id) as unknown as Measure;
    if (!measure) continue;

    const staff = measure.staves?.[clef];
    if (!staff || !Array.isArray(staff.bars)) continue;

    for (const bar of staff.bars) {
      if (Array.isArray(bar.beats)) {
        out.push({ clef, beats: bar.beats });
      }
    }
  }

  return out;
}

export const NoteE4: HarmonicNotePreset = {
  name: 'Piano E4',
  fundHz: 329.63,
  inharmonicityB: 0.0003,
  masterGain: 0.7,
  partials: [
    { n: 1, type: 'sine', amp: 1.0, decay: 1.8, detuneCentsSpread: 0.5 },
    { n: 2, type: 'sawtooth', amp: 0.45, decay: 1.3 },
    { n: 3, type: 'sawtooth', amp: 0.35, decay: 1.0 },
    { n: 4, type: 'triangle', amp: 0.25, decay: 0.9 },
    { n: 5, type: 'triangle', amp: 0.18, decay: 0.8 },
    { n: 6, type: 'sine', amp: 0.14, decay: 0.7 },
    { n: 7, type: 'sine', amp: 0.1, decay: 0.6 },
    { n: 8, type: 'sine', amp: 0.08, decay: 0.55 }
  ],
  envelope: { attack: 0.008, decayDrop: 0.6, decayTime: 0.18, tail: 4.0 },
  filters: { highShelfHz: 6000, highShelfGain: -2.5, lpfHz: 9000 },
  hammer: { enable: true, bandHz: 2500, q: 2.2, gain: 0.25, dur: 0.03 }
};
const handleClick = () => {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  playNote(audioCtx, NoteE4, { velocity: 0.9, duration: 3.5 });
};

function CreateSheet({}: Props) {
  const trebleBars = getBarsByMeasureIdsForClef(TempData, TempData.systems[0].measureIds, 'treble');
  const bassBars = getBarsByMeasureIdsForClef(TempData, TempData.systems[0].measureIds, 'bass');
  return (
    <DefaultLayout>
      <Staff bars={trebleBars} clef="treble" />
      <Box sx={{ mb: 10 }}></Box>
      <Staff bars={bassBars} clef="treble" />
      <Button size="small" onClick={handleClick}>
        Play
      </Button>
    </DefaultLayout>
  );
}

export default CreateSheet;
