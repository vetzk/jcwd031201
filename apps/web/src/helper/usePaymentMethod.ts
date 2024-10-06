import { useQuery } from '@tanstack/react-query';
import apiCall from './apiCall';

const usePaymentMethod = () => {
  return useQuery({
    queryKey: ['method'],
    queryFn: async () => {
      const { data } = await apiCall.get('/api/payment/method');
      return data;
    },
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes (optional)
  });
};

export default usePaymentMethod;
