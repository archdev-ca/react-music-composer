import { chakra } from '@chakra-ui/react';
import React from 'react';

type Props = {
  floating?: boolean;
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

function line({ floating }: Props) {
  return (
    <Line
      _after={{
        backgroundColor: floating ? '#eee' : '#000'
      }}
    />
  );
}

export default line;
