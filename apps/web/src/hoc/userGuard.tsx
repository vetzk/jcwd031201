import { UserContext } from '@/contexts/UserContext';
import { useRouter } from 'next/navigation';
import { ComponentType, useContext, useEffect } from 'react';

const userAuth = (WrappedComponent: ComponentType<any>) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const { user, loading } = useContext(UserContext);
    // const token = localStorage.getItem('token');

    useEffect(() => {
      if (!loading && user) {
        router.replace('/user/profile');
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return <WrappedComponent {...props} />;
    }
    return null;
  };
  return AuthenticatedComponent;
};

export default userAuth;
