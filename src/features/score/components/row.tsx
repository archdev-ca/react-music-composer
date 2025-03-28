'use client';
import { Box, Button, chakra, Flex, HStack, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import treble from '@/assets/images/treble.png';
import bass from '@/assets/images/bass.png';
import Image from 'next/image';
import Line from './line';

type Props = {
  children: ReactNode;
  clef: 'bass' | 'treble';
};

const ClefContainer = chakra('div', {
  base: {
    display: 'flex',
    alignItems: 'center',

    width: '80px',
    height: '120px'
  }
});

const Space = chakra('div', {
  base: {
    height: '11px',
    width: '100%',
    '&:hover': {
      backgroundColor: '#eee'
    }
  }
});

const spaces = {
  bass: [],
  treble: []
};

const symbols = {
  bass: bass.src,
  treble: treble.src
};

export function Row({ children, clef }: Props) {
  return (
    <HStack data-component="Row" alignItems="stretch" marginBottom={60} position="relative">
      <ClefContainer>
        <Image src={symbols[clef]} alt="" width={40} height={40} />
      </ClefContainer>
      <HStack flex={1} alignItems="stretch" bgColor="rgba(255,0,0,0.5)" position="relative">
        {children}
      </HStack>
      <VStack width="100%" gap={0} position="absolute">
        <Line />
        <Space />
        <Line />
        <Space />
        <Line />
        <Space />
        <Line />
        <Space />
        <Line />
        <Space />
        <Line />
        <Space />
        <Line floating />
        <Space />
        <Line floating />
        <Space />
        <Line floating />
        <Space />
        <Line floating />
        <Space />
      </VStack>
    </HStack>
  );
}

export default Row;
