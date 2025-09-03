import { Box } from '@mui/material';
import type { NoteDuration, NoteKey, Note as NoteData } from '../../types';
import Note1 from './../../assets/images/notes/1.svg';

type Props = {
  duration: NoteDuration;
  noteKey: NoteData['key'];
  octave: NoteData['octave'];
  accidental: NoteData['accidental'];
};

const NoteAssets: Record<NoteDuration, string> = {
  1: Note1,
  2: Note1,
  4: Note1,
  8: Note1,
  16: Note1
};

const NoteAccidental: Record<number, string> = {
  ['-1']: '',
  0: '',
  1: '#'
};

function Note({ noteKey, duration, accidental }: Props) {
  return (
    <>
      <Box component="img" sx={{ height: '15px' }} src={NoteAssets[duration]} alt="" />
      <span>
        {noteKey}
        {NoteAccidental[accidental]}
      </span>
    </>
  );
}

export default Note;
