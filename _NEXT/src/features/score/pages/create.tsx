import { Box, Card, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Beat, Note, Row } from '@/features/score';

type Props = {};

const DURATION = 1;

const notes: NoteKey[] = [
  // 'a0',
  // 'b0',
  // 'c1',
  // 'd1',
  // 'e1',
  // 'f1',
  // 'g1',
  // 'a1',
  // 'b1',
  // 'c2',
  // 'd2',
  // 'e2',
  // 'f2',
  // 'g2',
  // 'a2',
  // 'b2',
  // 'c3',
  // 'd3',
  // 'e3',
  // 'f3',
  // 'g3',
  // 'a3',
  // 'b3',
  'c4',
  'd4',
  'e4',
  'f4',
  'g4',
  'a4',
  'b4',
  'c5',
  'd5',
  'e5',
  'f5',
  'g5',
  'a5',
  'b5',
  'c6',
  'd6',
  'e6',
  'f6',
  'g6',
  'a6',
  'b6'
  // 'c7',
  // 'd7',
  // 'e7',
  // 'f7',
  // 'g7',
  // 'a7',
  // 'b7',
  // 'c8'
];

function ScoreCreate({}: Props) {
  return (
    <Box paddingTop={40} paddingX={10}>
      <Card.Root bg="#fff">
        <Card.Body>
          <Row clef="treble">
            {notes.map((note) => {
              return (
                <Beat key={note}>
                  <Note tonality={note} duration={DURATION} />
                </Beat>
              );
            })}
          </Row>
          <Row clef="bass">
            {notes.map((note) => {
              return (
                <Beat key={note}>
                  <Note tonality={note} duration={DURATION} />
                </Beat>
              );
            })}
          </Row>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}

export default ScoreCreate;
