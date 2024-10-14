import { useQuery } from '@tanstack/react-query';
import apiCall from './apiCall';

const useInvoice = (token: string, invoiceCode: string) => {
  return useQuery({
    queryKey: ['invoice'],
    queryFn: async () => {
      const { data } = await apiCall.get(`/api/invoice/${invoiceCode}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      return data;
    },
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes (optional)
  });
};

export default useInvoice;
