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
    position: 'absolute',
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
    <VStack data-component="Row" alignItems="stretch" marginBottom={60} position="relative">
      <ClefContainer>
        <Image src={symbols[clef]} alt="" width={40} height={40} />
      </ClefContainer>
      <HStack
        flex={1}
        alignItems="stretch"
        bgColor="rgba(255,0,0,0.5)"
        height="120px"
        left="80px"
        right={0}
        top={-2}
        position="absolute"
      >
        {children}
      </HStack>
      <VStack width="100%" gap={0}>
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
    </VStack>
  );
}

export default Row;
