'use client';
import { useParams, useRouter } from 'next/navigation';
import * as React from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import apiCall from '@/helper/apiCall';

interface IResetPasswordProps {}

const ResetPassword: React.FunctionComponent<IResetPasswordProps> = (props) => {
  const [resetToken, setResetToken] = React.useState<string>('');
  const router = useRouter();
  const { token } = useParams();
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [isConfirmVisible, setIsConfirmVisible] =
    React.useState<boolean>(false);
  const [error, setError] = React.useState<{ [key: string]: string }>({
    password: '',
    confirmPassword: '',
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.patch(
        '/api/auth/resetpass',
        {
          password,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return data;
    },
    onSuccess: (data) => {
      setIsLoading(true);
      toast.success('Reset Password Success', { position: 'bottom-center' });
      console.log(data);
      setTimeout(() => {
        setIsLoading(false);
        router.replace('/user/profile');
      }, 5000);
    },
    onError: (error: any) => {
      setIsLoading(false);
      toast.error('Failed to reset password', { position: 'bottom-center' });
      console.log(error);
    },
  });

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\.])[A-Za-z\d!@#$%^&*\.]{8,}$/;

    return passwordRegex.test(password);
  };

  const validateForm = () => {
    setError({
      password: '',
      confirmPassword: '',
    });

    let isValid = true;

    if (!validatePassword(password)) {
      setError((prev) => ({
        ...prev,
        password:
          'Password must have at least 8 characters, one uppercase, one lowercase, one number, and one special character',
      }));
      isValid = false;
    }

    if (!confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: 'Please confirm your password',
      }));
      isValid = false;
    }

    if (password !== confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: 'Password do not match',
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleClickButton = () => {
    if (validateForm()) {
      setIsDialogOpen(true);
    }
  };

  const handleResetPass = () => {
    mutation.mutate();
  };

  React.useEffect(() => {
    const validateToken = async () => {
      try {
        const { data } = await apiCall.get(`/api/auth/validate`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(data.result);

        setResetToken(data.result);
      } catch (error: any) {
        if (error.response.status === 401) {
          toast.error('Reset link has expired Please request a new one', {
            onClose: () => router.replace('/forgot-password'),
            position: 'bottom-center',
          });
        }
      }
    };

    validateToken();
    console.log(token);
  }, [router, token]);

  if (resetToken !== token) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen text-xl text-black">
        Please go back to login page because the link has expired
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex gap-20 px-10 pt-32 mb-10">
      <div className="w-1/2 p-10 flex flex-col">
        <div className="w-full flex-col flex justify-center items-center gap-12">
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <p className="text-4xl">Reset Your Password</p>
            <p className="text-slate-500">Please reset your password here</p>
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col px-10 gap-2">
              <Label>Password</Label>
              <div className="relative">
                <Input
                  placeholder="Enter your password"
                  type={isVisible ? 'text' : 'password'}
                  className=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isVisible ? (
                  <FaEyeSlash
                    size={20}
                    className="absolute right-3 bottom-2 cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                  />
                ) : (
                  <FaEye
                    size={20}
                    className="absolute right-3 bottom-2 cursor-pointer"
                    onClick={() => setIsVisible(!isVisible)}
                  />
                )}
              </div>
              {error.password && (
                <p className="text-red-500">{error.password}</p>
              )}
            </div>
            <div className="w-full flex flex-col px-10 gap-2 relative">
              <Label>Confirm Password</Label>
              <div className="relative">
                <Input
                  placeholder="Confirm your password"
                  type={isConfirmVisible ? 'text' : 'password'}
                  className=""
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {isConfirmVisible ? (
                  <FaEyeSlash
                    size={20}
                    className="absolute right-3 bottom-2 cursor-pointer"
                    onClick={() => setIsConfirmVisible(!isConfirmVisible)}
                  />
                ) : (
                  <FaEye
                    size={20}
                    className="absolute right-3 bottom-2 cursor-pointer"
                    onClick={() => setIsConfirmVisible(!isConfirmVisible)}
                  />
                )}
              </div>
              {error.confirmPassword && (
                <p className="text-red-500">{error.confirmPassword}</p>
              )}
            </div>
            <div className="w-full flex flex-col px-10 gap-2">
              <Button onClick={handleClickButton}>
                {isLoading ? 'Loading...' : 'Reset Password'}
              </Button>
              <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to reset your password?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Make sure the informations are correct
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-500 text-white">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleResetPass}>
                      Reset Password
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative">
        <Image
          src="/man-sitting-while-working-laptop.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute top-0 bg-white w-32 h-12 rounded-br-2xl"></div>
        <div className="absolute bottom-0 right-0 bg-white w-32 h-12 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-[7.9rem] bg-transparent w-32 h-12 custom-shadow-bottom-l rounded-br-3xl"></div>
        <div className="absolute bottom-12 right-0 bg-transparent w-12 h-12 custom-shadow-bottom-l-t rounded-br-3xl"></div>
        <div className="absolute top-12 left-0 bg-transparent w-12 h-12 custom-shadow rounded-tl-3xl"></div>
        <div className="absolute top-0 left-[8rem] bg-transparent w-12 h-12 custom-shadow rounded-tl-3xl"></div>
        <div className="absolute inset-0 flex justify-center items-end py-32 text-white">
          <p className="text-4xl text-center">
            Stay on Top of Your Invoices with Powerful Automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
