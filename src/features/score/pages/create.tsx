import { Box, Card, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Beat, Note, Row } from '@/features/score';

type Props = {};

function ScoreCreate({}: Props) {
  return (
    <Box paddingTop={40}>
      <Card.Root bg="#fff">
        <Card.Body>
          <Row>
            <Beat>
              <Note tonality="a0" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="b0" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="c1" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="d1" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="e1" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="f1" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="g1" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="a1" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="b1" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="c2" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="d2" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="e2" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="f2" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="g2" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="a2" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="b2" duration={4} />
            </Beat>
          </Row>

          <Row>
            <Beat>
              <Note tonality="c3" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="d3" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="e3" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="f3" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="g3" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="a3" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="b3" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="c4" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="d4" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="e4" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="f4" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="g4" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="a4" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="b4" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="c5" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="d5" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="e5" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="f5" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="g5" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="a5" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="b5" duration={4} />
            </Beat>
          </Row>
          <Row>
            <Beat>
              <Note tonality="c6" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="d6" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="e6" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="f6" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="g6" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="a6" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="b6" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="c7" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="d7" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="e7" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="f7" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="g7" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="a7" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="b7" duration={4} />
            </Beat>
            <Beat>
              <Note tonality="c8" duration={4} />
            </Beat>
          </Row>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}

export default ScoreCreate;
