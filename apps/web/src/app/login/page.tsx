'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Image from 'next/image';

import * as React from 'react';
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
import { useMutation } from '@tanstack/react-query';
import apiCall from '@/helper/apiCall';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import userAuth from '@/hoc/userGuard';
import { UserContext } from '@/contexts/UserContext';
import 'react-toastify/dist/ReactToastify.css';

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<{ [key: string]: string }>({
    username: '',
    password: '',
  });
  const { user, setUser } = React.useContext(UserContext);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.post('/api/auth/login', {
        username,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      setIsLoading(true);
      setIsDialogOpen(false);
      console.log(data);
      localStorage.setItem('token', data.result.token);
      toast.success('Login Success', {
        onClose: () => {
          setUser({
            email: data.result.email,
            username: data.result.username,
            identificationId: data.result.identificationId,
            isVerified: data.result.isVerified,
          });
          setIsLoading(false);
          router.replace('/user/profile');
        },
        position: 'bottom-center',
      });
    },
    onError: (error: any) => {
      setIsLoading(false);
      setIsDialogOpen(false);
      toast.error(error.response.data.message, { position: 'bottom-center' });
      console.log(error);
    },
  });

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\.])[A-Za-z\d!@#$%^&*\.]{8,}$/;

    return passwordRegex.test(password);
  };

  const formValidation = () => {
    setError({
      username: '',
      password: '',
    });

    let isValid = true;

    if (!username) {
      setError((prev) => ({ ...prev, username: 'Username is required ' }));
      isValid = false;
    }

    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password is required' }));
      isValid = false;
    }

    if (!validatePassword(password)) {
      setError((prev) => ({
        ...prev,
        password:
          'Password must have at least 8 characters, one uppercase, one lowercase, one number, and one special character',
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = () => {
    mutation.mutate();
  };

  const handleClickButton = () => {
    if (formValidation()) {
      setIsDialogOpen(true);
    }
  };
  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row gap-10 sm:gap-20 px-4 sm:px-10 pt-16 sm:pt-32 mb-10">
      <div className="w-full sm:w-1/2 p-5 sm:p-10 flex flex-col">
        <div className="w-full flex flex-col justify-center items-center gap-6 sm:gap-12">
          <div className="w-full flex flex-col justify-center items-center gap-3 sm:gap-5">
            <p className="text-2xl sm:text-4xl">Login to your account</p>
            <p className="text-slate-500 text-center">
              Let&apos;s get started with your personal profile before accessing
              our feature
            </p>
          </div>
          <div className="w-full flex flex-col gap-8 sm:gap-10">
            <div className="w-full flex flex-col px-5 sm:px-10 gap-2">
              <Label>Username</Label>
              <Input
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error.username && (
                <p className="text-red-500">{error.username}</p>
              )}
            </div>

            <div className="w-full flex flex-col px-5 sm:px-10 gap-2">
              <Label>Password</Label>
              <div className="relative">
                <Input
                  placeholder="Enter your password"
                  type={isVisible ? 'text' : 'password'}
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

              {error.password ? (
                <div className="flex justify-between items-center">
                  <p className="text-red-500">{error.password}</p>
                  <p className="cursor-pointer">
                    <Link href="/forgot-password">Forgot Password?</Link>
                  </p>
                </div>
              ) : (
                <div className="flex justify-end">
                  <p className="cursor-pointer">
                    <Link href="/forgot-password">Forgot Password?</Link>
                  </p>
                </div>
              )}
            </div>

            {/* Login Button and AlertDialog */}
            <div className="w-full flex flex-col px-5 sm:px-10 gap-2">
              <Button onClick={handleClickButton}>
                {mutation.isPending ? (
                  <div className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Loading...</span>
                  </div>
                ) : (
                  'Login'
                )}
              </Button>
              <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to login?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Make sure the informations are correct
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-500 text-white">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogin}>
                      Login
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <p className="text-center">
                Don&apos;t have an account?{' '}
                <Link className="text-green-300" href="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative hidden md:block">
        <Image
          src="/login.jpg"
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

export default userAuth(Login);
