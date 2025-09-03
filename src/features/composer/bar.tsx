import type { Beat as BeatData, Clef } from '../../types';
import Beat from './beat';

type Props = {
  clef: Clef;
  beats: BeatData[];
};

function Bar({ clef, beats }: Props) {
  return (
    <div>
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
    </div>
  );
}

export default Bar;
