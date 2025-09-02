import { Container } from '@mui/material';
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props) {
  return <Container>{children}</Container>;
}

export default DefaultLayout;
