import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import React from 'react';

type Props = {};

function ScoreIndex({}: Props) {
  return (
    <HStack>
      <Heading>Music Scores</Heading>
      <Button>Create Sheet Music</Button>
    </HStack>
  );
}

export default ScoreIndex;
