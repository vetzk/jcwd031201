'use client';
import Link from 'next/link';
import * as React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { UserContext } from '@/contexts/UserContext';
import { TiThMenuOutline } from 'react-icons/ti';
import { useMutation } from '@tanstack/react-query';
import apiCall from '@/helper/apiCall';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { Select, SelectTrigger, SelectValue } from './ui/select';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false); // State to toggle the mobile menu
  const { user, setUser } = React.useContext(UserContext);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.post('/api/auth/logout');
      return data;
    },
    onSuccess: (data) => {
      setIsDialogOpen(false);
      localStorage.removeItem('token');
      setUser(null);
      setIsMenuOpen(false);
      toast('Logout success', {
        onClose: () => {
          router.replace('/login');
        },
        position: 'bottom-center',
      });
      console.log(data);
    },
    onError: (error) => {
      setIsDialogOpen(false);
      toast.error('Logout failed', { position: 'bottom-center' });
      console.log(error);
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  const handleClickButton = () => {
    setIsDialogOpen(true);
  };

  return (
    <div
      className={`w-full ${pathname.includes('/user') && 'bg-black z-30'} ${
        pathname === '/login' ||
        pathname.includes('/reset-password') ||
        pathname === '/register' ||
        pathname === '/verify' ||
        pathname === '/forgot-password'
          ? 'text-black z-30 bg-white'
          : 'text-white/45'
      } flex justify-between items-center fixed left-0 right-0 top-0 p-7 z-30 bg-black`}
    >
      <div className="w-1/4 relative">
        <Image
          src={`${pathname === '/login' || pathname.includes('/reset-password') || pathname === '/register' || pathname === '/verify' || pathname === '/forgot-password' ? '/logo-black.png' : '/logo-no-background.png'}`}
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
      </div>

      {/* Hamburger Icon for mobile screens */}
      <div className="md:hidden">
        <Button
          onClick={handleMenuToggle}
          className={`${
            pathname === '/login' ||
            pathname.includes('/reset-password') ||
            pathname === '/register' ||
            pathname === '/verify' ||
            pathname === '/forgot-password'
              ? 'bg-black'
              : 'bg-transparent hover:bg-transparent'
          }   text-2xl`}
        >
          <TiThMenuOutline size={30} />
        </Button>
      </div>

      <div className="hidden md:flex w-full justify-center items-center gap-5">
        <p>
          <Link href={''}>Features</Link>
        </p>
        <p>Pricing</p>
        <p>Company</p>
        <p>Resources</p>
      </div>

      {user && user.email !== '' ? (
        <div className="w-1/4 hidden md:flex justify-end items-center">
          <NavigationMenu className="w-full  bg-transparent">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black text-white">
                  Welcome, {user.username}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-full flex flex-col gap-5 p-7">
                  <Link href="/user/dashboard" className="hover:bg-slate-300">
                    <NavigationMenuLink>Dashboard</NavigationMenuLink>
                  </Link>
                  <Link href="/user/profile" className="hover:bg-slate-300">
                    <NavigationMenuLink>Profile</NavigationMenuLink>
                  </Link>
                  <Link href="/user/product" className="hover:bg-slate-300">
                    <NavigationMenuLink>Product</NavigationMenuLink>
                  </Link>
                  <Link href="/user/invoice" className="hover:bg-slate-300">
                    <NavigationMenuLink>Invoice</NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ) : (
        <div className="w-1/4 hidden md:flex justify-end items-center gap-3">
          <Button
            onClick={() => router.push('/login')}
            className={`bg-transparent ${pathname === '/login' || pathname.includes('/reset-password') || pathname === '/register' || pathname === '/verify' || pathname === '/forgot-password' ? 'text-black' : 'text-white'} shadow-none hover:bg-transparent`}
          >
            Login
          </Button>
          <Button
            onClick={() => router.push('/register')}
            className={`bg-transparent ${pathname === '/login' || pathname.includes('/reset-password') || pathname === '/register' || pathname === '/verify' || pathname === '/forgot-password' ? 'text-black border-solid border-black border' : 'text-white shadow-none hover:bg-transparent border-solid border border-white rounded-xl'} `}
          >
            Register
          </Button>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`absolute left-0 right-0 top-16 ${
            pathname === '/login' ||
            pathname.includes('/reset-password') ||
            pathname === '/register' ||
            pathname === '/verify' ||
            pathname === '/forgot-password'
              ? 'text-white'
              : ''
          } bg-black shadow-lg p-5 flex flex-col md:hidden`}
        >
          <Link href={''} className="py-2">
            Features
          </Link>
          <Link href={''} className="py-2">
            Pricing
          </Link>
          <Link href={''} className="py-2">
            Company
          </Link>
          <Link href={''} className="py-2">
            Resources
          </Link>
          {user && user?.email !== '' ? (
            <>
              <p className="py-2">
                Welcome,{' '}
                <span className="text-white font-bold">{user.username}</span>
              </p>
              <Button onClick={handleClickButton} className="py-2">
                Logout
              </Button>
              <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to log out?
                    </AlertDialogTitle>
                    <AlertDialogDescription>Make sure</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-500">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout}>
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ) : (
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => {
                  router.push('/login');
                  setIsMenuOpen(false);
                }}
                className="py-2"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  router.push('/register');
                  setIsMenuOpen(false);
                }}
                className="py-2"
              >
                Register
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
