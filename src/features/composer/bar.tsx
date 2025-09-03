import { Box, Stack, styled } from '@mui/material';
import type { Beat as BeatData, Clef } from '../../types';
import Beat from './beat';

type Props = {
  clef: Clef;
  beats: BeatData[];
};

const Space = styled(Box)(() => ({
  height: '11px',
  backgroundColor: 'rgba(0,0, 255, .1)'
}));
const Line = styled(Box)(() => ({
  height: '11px',
  position: 'relative',
  '&:after': {
    content: `${'" "'}`,
    height: '1px',
    display: 'block',
    backgroundColor: '#000',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '5px'
  }
}));

function Bar({ clef, beats }: Props) {
  return (
    <Stack
      sx={{
        position: 'relative',
        minWidth: '200px',
        borderRight: '1px solid #000',
        borderLeft: '1px solid #000'
      }}
    >
      {beats?.length &&
        beats.map((beat, i) => (
          <Beat
            duration={beat.duration}
            key={i}
            isRest={beat.rest}
            notes={beat.notes}
            span={beat.span}
          />
        ))}
      <Line />
      <Space />
      <Line />
      <Space />
      <Line />
      <Space />
      <Line />
      <Space />
      <Line />
    </Stack>
  );
}

export default Bar;
