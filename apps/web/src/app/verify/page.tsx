'use client';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/contexts/UserContext';
import apiCall from '@/helper/apiCall';
import withAuth from '@/hoc/authGuard';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IVerifyEmailProps {}

const VerifyEmail: React.FunctionComponent<IVerifyEmailProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const token = localStorage.getItem('token');
  const { user } = React.useContext(UserContext);
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.patch(
        '/api/auth/verify',
        {},
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // },
      );
      return data;
    },
    onSuccess: (data) => {
      setIsLoading(true);
      toast('Verify Email Success');
      console.log(data);
      setTimeout(() => {
        setIsLoading(false);
        router.replace('/user/profile');
      }, 5000);
    },
    onError: (error) => {
      setIsLoading(false);
      toast('Failed to verify');
      console.log(error);
    },
  });

  const handleVerify = () => {
    mutation.mutate();
  };

  React.useEffect(() => {
    console.log(user?.isVerified);
  });

  if (user?.isVerified === true) {
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <div className="w-full h-screen flex flex-col justify-center items-center gap-5 relative">
          <Image src="/mail.png" alt="" width={100} height={100} />
          <div className="text-center flex flex-col items-center justify-center gap-5">
            <p>You already verified your email</p>
            <Button
              className=""
              onClick={() => router.replace('/user/profile')}
            >
              Back to profile
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ToastContainer />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full h-screen flex flex-col justify-center items-center gap-5 relative">
          <Image src="/mail.png" alt="" width={100} height={100} />
          <div className="text-center flex flex-col items-center justify-center gap-5">
            <p>
              We have sent email to {user?.email} Please kindly check your email
              to verify your email address or you can click button below to
              verify
            </p>
            <Button className="w-1/4" onClick={handleVerify}>
              {isLoading ? 'Verifying...' : 'Verify Email'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(VerifyEmail);
