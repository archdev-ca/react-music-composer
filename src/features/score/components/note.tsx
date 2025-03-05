import React from 'react';
import Note1 from '@/assets/notes/1.svg';
import Note2 from '@/assets/notes/2.svg';
import Note4 from '@/assets/notes/4.svg';
import Note8 from '@/assets/notes/8.svg';
import Note16 from '@/assets/notes/16.svg';
import Image from 'next/image';

type Props = {
  duration: NoteDuration;
};

const assets = {
  1: Note1,
  2: Note2,
  4: Note4,
  8: Note8,
  16: Note16
};

export function Note({ duration }: Props) {
  return (
    <div>
      <Image src={assets[duration]} alt="" />
    </div>
  );
}

export default Note;
