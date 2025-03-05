import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Note, Row } from '@/features/score';

type Props = {};

function ScoreCreate({}: Props) {
  return (
    <div>
      <Row>
        <Note duration={1} />
        <Note duration={2} />
        <Note duration={4} />
        <Note duration={8} />
        <Note duration={16} />
      </Row>
    </div>
  );
}

export default ScoreCreate;
