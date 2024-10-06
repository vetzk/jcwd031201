import { useQuery } from '@tanstack/react-query';
import apiCall from './apiCall';

const usePaymentDetails = (token: string) => {
  return useQuery({
    queryKey: ['payment-details'],
    queryFn: async () => {
      const { data } = await apiCall.get('/api/payment/details', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes (optional)
  });
};

export default usePaymentDetails;
