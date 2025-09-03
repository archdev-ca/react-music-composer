import type { Clef, Bar as BarData } from '../../types';
import Bar from './bar';

type Props = {
  clef: Clef;
  bars: BarData[];
};

function Staff({ clef, bars }: Props) {
  return (
    <div>{bars.length && bars.map((bar, i) => <Bar key={i} beats={bar.beats} clef={clef} />)}</div>
  );
}

export default Staff;
