'use client';
import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const Provider = dynamic(() => import('@/components/ui/provider'), { ssr: false });

type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>{children}</Provider>
    </QueryClientProvider>
  );
}

export default DefaultLayout;
