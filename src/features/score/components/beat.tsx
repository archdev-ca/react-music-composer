'use client';
import { chakra } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const BeatContainer = chakra('div', {
  base: {
    minWidth: '40px',
    height: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0,0,255, .2)',
    _hover: {
      backgroundColor: 'rgba(0,0,255, .2)'
    }
  }
});

export function Beat({ children }: Props) {
  return <BeatContainer data-component="beat">{children}</BeatContainer>;
}

export default Beat;
