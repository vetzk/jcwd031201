'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import apiCall from '@/helper/apiCall';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import userAuth from '@/hoc/userGuard';
import { UserContext } from '@/contexts/UserContext';

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const [email, setEmail] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isConfirmVisible, setIsConfirmVisible] =
    React.useState<boolean>(false);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<{ [key: string]: string }>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: '',
  });
  const { user, setUser } = React.useContext(UserContext);

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.post('/api/auth/register', {
        email,
        username,
        password,
        confirmPassword,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      setIsLoading(true);
      setIsDialogOpen(false);
      localStorage.setItem('token', data.result.token);
      toast.success('Register success', {
        onClose: () => {
          setUser({
            username: data.result.username,
            email: data.result.email,
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
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-center' });
    },
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\.])[A-Za-z\d!@#$%^&*\.]{8,}$/;

    return passwordRegex.test(password);
  };

  const validateForm = () => {
    setError({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: '',
    });

    let isValid = true;

    if (!username) {
      setError((prev) => ({ ...prev, username: 'Username is required' }));

      isValid = false;
    }

    if (!email || !validateEmail(email)) {
      setError((prev) => ({
        ...prev,
        email: 'Please enter a valid email address',
      }));
      isValid = false;
    }

    if (!password || !validatePassword(password)) {
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

    if (!isChecked) {
      setError((prev) => ({
        ...prev,
        checkbox: 'Please agree to the terms and conditions',
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

  const handleRegister = () => {
    mutation.mutate();
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-10 px-4 pt-20 mb-10 md:flex-row md:gap-20 md:px-10 md:pt-32">
      <div className="w-1/2 relative hidden md:block">
        <Image
          src="/man-wearing-t-shirt-gesturing.jpg"
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
      <div className="w-full p-5 flex flex-col md:w-1/2 md:p-10">
        <div className="w-full flex-col flex justify-center items-center gap-8 md:gap-12">
          <div className="w-full flex flex-col justify-center items-center gap-3 md:gap-5">
            <p className="text-2xl md:text-4xl">Create your account</p>
            <p className="text-slate-500 text-sm text-center md:text-base">
              Let&apos;s get started with your personal profile before accessing
              our feature
            </p>
          </div>
          <div className="w-full flex flex-col gap-6 md:gap-10">
            <div className="w-full flex flex-col gap-2 px-4 md:px-10">
              <Label>Username</Label>
              <Input
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error.username && (
                <p className="text-red-500 text-xs md:text-base">
                  {error.username}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 px-4 md:px-10">
              <Label>Email</Label>
              <Input
                placeholder="Enter your email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <p className="text-red-500 text-xs md:text-base">
                  {error.email}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 px-4 md:px-10">
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
              {error.password && (
                <p className="text-red-500 text-xs md:text-base">
                  {error.password}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 px-4 md:px-10">
              <Label>Confirm Password</Label>
              <div className="relative">
                <Input
                  placeholder="Confirm your password"
                  type={isConfirmVisible ? 'text' : 'password'}
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
                <p className="text-red-500 text-xs md:text-base">
                  {error.confirmPassword}
                </p>
              )}
            </div>
            <div className="w-full flex gap-3 items-center px-4 md:px-10">
              <Checkbox
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(checked === true)}
              />
              <p className="text-sm md:text-base">
                I agree to all terms, privacy policy and fees
              </p>
            </div>
            {error.checkbox && (
              <p className="text-red-500 text-xs md:text-base px-4 md:px-10">
                {error.checkbox}
              </p>
            )}
            <div className="w-full flex flex-col gap-2 px-4 md:px-10">
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
                  'Register'
                )}
              </Button>
              <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to register?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Make sure the informations are correct
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-500 text-white">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleRegister}>
                      Register
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <p className="text-center">
                Already have an account?{' '}
                <Link className="text-green-300" href="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userAuth(Register);
