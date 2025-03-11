'use client';
import { Box, Button, chakra, Flex, HStack, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import treble from '@/assets/images/treble.png';
import bass from '@/assets/images/bass.png';
import Image from 'next/image';

type Props = {
  children: ReactNode;
  clef: 'bass' | 'treble';
};

const Line = chakra('div', {
  base: {
    '&:after': {
      content: '""',
      display: 'block',
      height: '1px',
      backgroundColor: '#000'
    },
    paddingY: '5px',
    width: '100%',
    '&:hover': {
      backgroundColor: '#eee'
    }
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
    <VStack data-component="Row" alignItems="stretch" marginBottom={60}>
      <Box position="absolute">
        <Image src={symbols[clef]} alt="" width={40} height={40} />
      </Box>
      <HStack width="100%" flex={1} alignItems="stretch">
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
        <Line variant="phantom" />
        <Space />
        <Line variant="phantom" />
        <Space />
        <Line variant="phantom" />
        <Space />
        <Line variant="phantom" />
        <Space />
      </VStack>
    </VStack>
  );
}

export default Row;
