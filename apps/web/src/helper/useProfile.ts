import { useQuery } from '@tanstack/react-query';
import apiCall from './apiCall';

const useProfile = (token: string) => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data } = await apiCall.get('/api/profile', {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      return data;
    },
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes (optional)
  });
};

export default useProfile;
