import { useQuery } from '@tanstack/react-query';
import apiCall from './apiCall';

const usePayment = () => {
  return useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const { data } = await apiCall.get('/api/payment/type');
      return data;
    },
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes (optional)
  });
};

export default usePayment;
