import React from 'react';

export type UserType = {
  email: string;
  identificationId: string;
  username: string;
  isVerified: boolean;
};

export interface UserContextType {
  user: UserType | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}
