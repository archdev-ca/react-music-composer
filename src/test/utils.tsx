'use client';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const Provider = dynamic(() => import('@/components/ui/provider'), { ssr: false });

type AllProvidersProps = {
  children: ReactNode;
};

export const AllProviders = ({ children }: AllProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>{children}</Provider>
    </QueryClientProvider>
  );
};
