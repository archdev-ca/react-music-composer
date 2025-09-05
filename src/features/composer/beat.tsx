import { Box } from '@mui/material';
import type { Note as NoteData, NoteDuration } from '../../types';
import Note from './note';

type Props = {
  duration: NoteDuration;
  isRest?: boolean;
  span: number;
  notes?: NoteData[];
};

function Beat({ isRest, span, notes, duration }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: `${(1 / duration) * 100}%`,
        top: 0,
        bottom: 0
      }}
    >
      {notes?.length &&
        notes.map((note, i) => (
          <Note
            key={i}
            duration={duration}
            noteKey={note.key}
            octave={note.octave}
            accidental={note.accidental}
          />
        ))}
    </Box>
  );
}

export default Beat;
