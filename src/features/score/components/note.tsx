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

const positionMap = {
  a0: 25,
  b0: 24,
  c1: 23,
  d1: 22,
  e1: 21,
  f1: 20,
  g1: 19,
  a1: 18,
  b1: 17,
  c2: 16,
  d2: 15,
  e2: 14,
  f2: 13,
  g2: 12,
  a2: 11,
  b2: 10,
  c3: 9,
  d3: 8,
  e3: 7,
  f3: 6,
  g3: 5,
  a3: 4,
  b3: 3,
  c4: 2,
  d4: 1,
  e4: 0,
  f4: -1,
  g4: -2,
  a4: -3,
  b4: -4,
  c5: -5,
  d5: -6,
  e5: -7,
  f5: -8,
  g5: -9,
  a5: -10,
  b5: -11,
  c6: -12,
  d6: -13,
  e6: -14,
  f6: -15,
  g6: -16,
  a6: -17,
  b6: -18,
  c7: -19,
  d7: -20,
  e7: -21,
  f7: -22,
  g7: -23,
  a7: -24,
  b7: -25,
  c8: -26
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

export function Note({ tonality, duration }: Props) {
  const top =
    typeof positionMap[tonality] !== 'undefined'
      ? `${positionMap[tonality] * INCREMENT + BASE_POS}px`
      : 0;
  console.log(tonality, top);
  return (
    <NoteContainer data-component="note" data-key={`${tonality}`} top={top}>
      <NoteName>{tonality}</NoteName>
      <Image src={assets[duration]} alt="" />
    </NoteContainer>
  );
}

export default Note;
