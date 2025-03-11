'use client';
import React from 'react';
import Note1 from '@/assets/notes/1.svg';
import Note2 from '@/assets/notes/2.svg';
import Note4 from '@/assets/notes/4.svg';
import Note8 from '@/assets/notes/8.svg';
import Note16 from '@/assets/notes/16.svg';
import Image from 'next/image';
import { chakra } from '@chakra-ui/react';

type Props = {
  duration: NoteDuration;
  tonality: NoteKey;
};

const assets = {
  1: Note1,
  2: Note2,
  4: Note4,
  8: Note8,
  16: Note16
};

const INCREMENT = 11;
const BASE_POS = 88;

const NOTE_POSITION_OFFSET = {
  a0: '',
  b0: '',
  c1: '',
  d1: '',
  e1: '',
  f1: '',
  g1: '',
  a1: '',
  b1: '',
  c2: '',
  d2: '',
  e2: '',
  f2: '',
  g2: '',
  a2: '',
  b2: '',
  c3: '',
  d3: '',
  e3: '',
  f3: '',
  g3: '',
  a3: '',
  b3: '',
  c4: -2,
  d4: -1
};

const noteConfig = {
  a0: {
    pos: 25,
    floating: false
  },
  b0: {
    pos: 24,
    floating: false
  },
  c1: {
    pos: 23,
    floating: false
  },
  d1: {
    pos: 22,
    floating: false
  },
  e1: {
    pos: 21,
    floating: false
  },
  f1: {
    pos: 20,
    floating: false
  },
  g1: {
    pos: 19,
    floating: false
  },
  a1: {
    pos: 18,
    floating: false
  },
  b1: {
    pos: 17,
    floating: false
  },
  c2: {
    pos: 16,
    floating: false
  },
  d2: {
    pos: 15,
    floating: false
  },
  e2: {
    pos: 14,
    floating: false
  },
  f2: {
    pos: 13,
    floating: false
  },
  g2: {
    pos: 12,
    floating: false
  },
  a2: {
    pos: 11,
    floating: false
  },
  b2: {
    pos: 10,
    floating: false
  },
  c3: {
    pos: 9,
    floating: false
  },
  d3: {
    pos: 8,
    floating: false
  },
  e3: {
    pos: 7,
    floating: false
  },
  f3: {
    pos: 6,
    floating: false
  },
  g3: {
    pos: 5,
    floating: false
  },
  a3: {
    pos: 4,
    floating: false
  },
  b3: {
    pos: 3,
    floating: false
  },
  c4: {
    pos: 2,
    floating: false
  },
  d4: {
    pos: 1,
    floating: false
  },
  e4: {
    pos: 0,
    floating: false
  },
  f4: {
    pos: -1,
    floating: false
  },
  g4: {
    pos: -2,
    floating: false
  },
  a4: {
    pos: -3,
    floating: false
  },
  b4: {
    pos: -4,
    floating: false
  },
  c5: {
    pos: -5,
    floating: false
  },
  d5: {
    pos: -6,
    floating: false
  },
  e5: {
    pos: -7,
    floating: false
  },
  f5: {
    pos: -8,
    floating: false
  },
  g5: {
    pos: -9,
    floating: false
  },
  a5: {
    pos: -10,
    floating: false
  },
  b5: {
    pos: -11,
    floating: false
  },
  c6: {
    pos: -12,
    floating: false
  },
  d6: {
    pos: -13,
    floating: false
  },
  e6: {
    pos: -14,
    floating: false
  },
  f6: {
    pos: -15,
    floating: false
  },
  g6: {
    pos: -16,
    floating: false
  },
  a6: {
    pos: -17,
    floating: false
  },
  b6: {
    pos: -18,
    floating: false
  },
  c7: {
    pos: -19,
    floating: false
  },
  d7: {
    pos: -20,
    floating: false
  },
  e7: {
    pos: -21,
    floating: false
  },
  f7: {
    pos: -22,
    floating: false
  },
  g7: {
    pos: -23,
    floating: false
  },
  a7: {
    pos: -24,
    floating: false
  },
  b7: {
    pos: -25,
    floating: false
  },
  c8: {
    pos: -26,
    floating: false
  }
};

const NoteContainer = chakra('div', {
  base: {
    position: 'absolute',
    height: '41px',
    display: 'flex',
    alignItems: 'flex-end'
  }
});

const NoteName = chakra('span', {
  base: {
    position: 'absolute',
    color: '#000',
    left: -2,
    bottom: 2,
    fontSize: 12
  }
});

const PhantomLine = chakra('div', {
  base: {
    position: 'absolute',
    height: '1px',
    backgroundColor: '#000',
    bottom: '5px',
    left: '-10px',
    right: '-10px'
  }
});

export function Note({ tonality, duration }: Props) {
  const top =
    typeof noteConfig[tonality].pos !== 'undefined'
      ? `${noteConfig[tonality].pos * INCREMENT + BASE_POS}px`
      : 0;
  console.log(tonality, top);
  return (
    <NoteContainer data-component="note" data-key={`${tonality}`} top={top}>
      <NoteName>{tonality}</NoteName>
      <Image src={assets[duration]} alt="" />
      {noteConfig[tonality].floating && <PhantomLine />}
    </NoteContainer>
  );
}

export default Note;
