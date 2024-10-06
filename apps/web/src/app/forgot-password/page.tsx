'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as React from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from '@tanstack/react-query';
import apiCall from '@/helper/apiCall';
import userAuth from '@/hoc/userGuard';

interface IForgotPasswordProps {}

const ForgotPassword: React.FunctionComponent<IForgotPasswordProps> = (
  props,
) => {
  const [email, setEmail] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.post('/api/auth/forgotpass', {
        email,
      });
      return data;
    },
    onSuccess: (data) => {
      toast('Please check your email');
      console.log(data);
    },
    onError: (error: any) => {
      toast(error.response.data.message);
      console.log(error);
    },
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;

    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address');
      isValid = false;
    }
    return isValid;
  };

  const handleClickButton = () => {
    if (validateForm()) {
      setIsDialogOpen(true);
    }
  };

  const handleForgotPass = () => {
    mutation.mutate();
  };
  return (
    <div className="w-full min-h-screen flex gap-20 px-10 pt-32 mb-10">
      <ToastContainer />
      <div className="w-1/2 p-10 flex flex-col">
        <div className="w-full flex-col flex justify-center items-center gap-12">
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <p className="text-4xl">Forgot Password</p>
            <p className="text-slate-500">
              No worries we&apos;ll send you reset instructions
            </p>
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col px-10 gap-2">
              <Label>Email</Label>
              <Input
                placeholder="Enter your email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="w-full flex flex-col px-10 gap-2">
              <Button onClick={handleClickButton}>Reset Password</Button>
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
                    <AlertDialogAction onClick={handleForgotPass}>
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

export default userAuth(ForgotPassword);
