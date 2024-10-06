import { useQuery } from '@tanstack/react-query';
import apiCall from './apiCall';

const useCategory = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const { data } = await apiCall.get('/api/product/category');
      return data;
    },
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes (optional)
  });
};

export default useCategory;
