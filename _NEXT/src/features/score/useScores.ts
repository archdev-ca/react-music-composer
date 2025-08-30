'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchScores } from './api/fetchScores';

export const useScores = () => {
  const getScores = useQuery({ queryKey: ['scores'], queryFn: fetchScores });

  return {
    getScores
  };
};
