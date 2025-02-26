'use client';
import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Provider = dynamic(() => import('@/components/ui/provider'), { ssr: false });

type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props) {
  return <Provider>{children}</Provider>;
}

export default DefaultLayout;
