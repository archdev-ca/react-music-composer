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
    <div>
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
    </div>
  );
}

export default Beat;
