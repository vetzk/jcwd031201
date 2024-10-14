'use client';

import React, { useEffect } from 'react';
import { UserContextType, UserType } from './type';
import { useQuery } from '@tanstack/react-query';
import apiCall from '@/helper/apiCall';

export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {},
});

interface IUserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FunctionComponent<IUserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<UserType | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  // const checkToken = localStorage.getItem('token');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      // if (!checkToken) {
      //   return null;
      // }
      const { data } = await apiCall.get('/api/auth/keeplogin', {
        // headers: {
        //   Authorization: `Bearer ${checkToken}`,
        // },
      });
      console.log(data);
      localStorage.setItem('token', data.result.token);
      setUser({
        email: data.result.email,
        identificationId: data.result.identificationId,
        username: data.result.username,
      });

      return data;
    },
  });

  useEffect(() => {
    if (data || isError) {
      setLoading(false);
    }

    // if (!user) {
    //   setLoading(false);
    // }
  }, [data, isError, user]);
  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
