import { Box, Card, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Beat, Note, Row } from '@/features/score';

type Props = {};

const DURATION = 1;

function ScoreCreate({}: Props) {
  return (
    <Box paddingTop={40}>
      <Card.Root bg="#fff">
        <Card.Body>
          <Row>
            <Beat>
              <Note tonality="a0" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="b0" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="c1" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="d1" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="e1" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="f1" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="g1" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="a1" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="b1" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="c2" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="d2" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="e2" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="f2" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="g2" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="a2" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="b2" duration={DURATION} />
            </Beat>
          </Row>

          <Row>
            <Beat>
              <Note tonality="c3" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="d3" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="e3" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="f3" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="g3" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="a3" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="b3" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="c4" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="d4" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="e4" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="f4" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="g4" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="a4" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="b4" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="c5" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="d5" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="e5" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="f5" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="g5" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="a5" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="b5" duration={DURATION} />
            </Beat>
          </Row>
          <Row>
            <Beat>
              <Note tonality="c6" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="d6" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="e6" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="f6" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="g6" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="a6" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="b6" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="c7" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="d7" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="e7" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="f7" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="g7" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="a7" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="b7" duration={DURATION} />
            </Beat>
            <Beat>
              <Note tonality="c8" duration={DURATION} />
            </Beat>
          </Row>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}

export default ScoreCreate;
