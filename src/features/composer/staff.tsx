import { Stack } from '@mui/material';
import type { Clef, Bar as BarData } from '../../types';
import Bar from './bar';

type Props = {
  clef: Clef;
  bars: BarData[];
};

function Staff({ clef, bars }: Props) {
  return (
    <Stack direction="row">
      {bars.length && bars.map((bar, i) => <Bar key={i} beats={bar.beats} clef={clef} />)}
    </Stack>
  );
}

export default Staff;
