import axios from '@/lib/axiosInstance';

export const fetchScores = async () => {
  const { data } = await axios.get('/scores');
  return data;
};
