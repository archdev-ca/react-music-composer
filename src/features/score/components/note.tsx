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
  c4: '',
  d4: '',
  e4: 88,
  f4: 77,
  g4: 66,
  a4: 55,
  b4: 44,
  c5: 33,
  d5: 22,
  e5: 11,
  f5: 0,
  g5: -11,
  a5: -22,
  b5: -33,
  c6: -44,
  d6: -55,
  e6: -66,
  f6: -77,
  g6: -88,
  a6: -99,
  b6: -110,
  c7: -121,
  d7: -132,
  e7: -143,
  f7: -154,
  g7: -165,
  a7: -176,
  b7: -187,
  c8: -198
};

const NoteContainer = chakra('div', {
  base: {
    position: 'absolute',
    height: '41px',
    display: 'flex',
    alignItems: 'flex-end'
  }
});

export function Note({ tonality, duration }: Props) {
  return (
    <NoteContainer
      data-component="note"
      data-key={`${tonality}`}
      top={positionMap[tonality] ? `${positionMap[tonality]}px` : 0}
    >
      <Image src={assets[duration]} alt="" />
    </NoteContainer>
  );
}

export default Note;
