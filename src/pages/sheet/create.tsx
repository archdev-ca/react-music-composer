import Staff from '../../features/composer/staff';
import DefaultLayout from '../../layouts/default';
import type { Bar, Clef, Measure, Score } from '../../types';

type Props = {};

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
    const measure = byId.get(id);
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

function CreateSheet({}: Props) {
  const trebleBars = getBarsByMeasureIdsForClef(TempData, TempData.systems[0].measureIds, 'treble');
  const bassBars = getBarsByMeasureIdsForClef(TempData, TempData.systems[0].measureIds, 'bass');
  return (
    <DefaultLayout>
      <Staff bars={trebleBars} clef="treble" />
    </DefaultLayout>
  );
}

export default CreateSheet;
