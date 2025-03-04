'use client';
import { Button, Flex, Heading, HStack, Table, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useScores } from '../useScores';

type Props = {};

function ScoreIndex({}: Props) {
  const { getScores } = useScores();

  console.log({ getScores: getScores.data });

  return (
    <VStack>
      <HStack>
        <Heading>Music Scores</Heading>
        <Button>Create Sheet Music</Button>
      </HStack>
      {getScores.data?.length ? (
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Title</Table.ColumnHeader>
              <Table.ColumnHeader>Author</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {getScores.data.map((score, i) => (
              <Table.Row key={i}>
                <Table.Cell>{score.id}</Table.Cell>
                <Table.Cell>{score.title}</Table.Cell>
                <Table.Cell>{score.author}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <Text>No sheet music found</Text>
      )}
    </VStack>
  );
}

export default ScoreIndex;
