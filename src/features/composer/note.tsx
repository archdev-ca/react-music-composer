import { Box, styled, Typography, type SxProps } from '@mui/material';
import type { NoteDuration, NoteKey, Note as NoteData } from '../../types';
import Note1 from './../../assets/images/notes/1.svg';
import Note2 from './../../assets/images/notes/2.svg';
import Note4 from './../../assets/images/notes/4.svg';

type Props = {
  duration: NoteDuration;
  noteKey: NoteData['key'];
  octave: NoteData['octave'];
  accidental: NoteData['accidental'];
};

const NoteAssets: Record<NoteDuration, string> = {
  1: Note1,
  2: Note2,
  4: Note4,
  8: Note1,
  16: Note1
};

const NoteStyles: Record<number, SxProps> = {
  2: {
    height: '40px'
  },
  4: {
    height: '40px'
  }
};

const NoteAccidental: Record<number, string> = {
  ['-1']: '',
  0: '',
  1: '#'
};

const Line = styled(Box)(() => ({
  height: '1px',
  backgroundColor: '#000',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '5px'
}));

const getStyles = (key: string) => {
  switch (key) {
    case 'c4':
      return {
        bottom: '-22px'
      };
    case 'd4':
      return {
        bottom: '-11px'
      };
    case 'e4':
      return {
        bottom: '0px'
      };
    case 'f4':
      return {
        bottom: '11px'
      };
    case 'g4':
      return {
        bottom: '22px'
      };
    case 'a4':
      return {
        bottom: '33px'
      };
    case 'b4':
      return {
        bottom: '44px'
      };
    case 'c5':
      return {
        bottom: '55px'
      };
    case 'd5':
      return {
        bottom: '66px'
      };
    case 'e5':
      return {
        bottom: '77px'
      };
    case 'f5':
      return {
        bottom: '88px'
      };
    default:
      return {};
  }
};

function Note({ noteKey, duration, accidental, octave }: Props) {
  const style = getStyles(`${noteKey}${octave}`);
  const noteStyle = NoteStyles[duration];
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '15px',
        right: 0,
        margin: '0 auto',
        textAlign: 'center',
        ...style
      }}
    >
      <Box
        component="img"
        sx={{ display: 'block', height: '11px', ...noteStyle }}
        src={NoteAssets[duration]}
        alt=""
      />
      {/* <Line /> */}
      <Box sx={{ position: 'absolute', top: 0, left: '15px' }}>
        <Typography variant="caption" component="span">
          {noteKey}
          {octave}
        </Typography>
        {NoteAccidental[accidental]}
      </Box>
    </Box>
  );
}

export default Note;
