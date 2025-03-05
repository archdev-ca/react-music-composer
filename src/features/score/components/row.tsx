'use client';
import { chakra, Flex, HStack, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
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
    height: '3px',
    width: '100%',
    paddingY: '4px',
    '&:hover': {
      backgroundColor: '#eee'
    }
  }
});

export function Row({ children }: Props) {
  return (
    <VStack>
      <HStack width="100%">{children}</HStack>
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
      </VStack>
    </VStack>
  );
}

export default Row;
