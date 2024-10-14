'use client';
import * as React from 'react';
import { AiOutlinePieChart } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { GrTransaction } from 'react-icons/gr';
import { IoHelpCircleOutline } from 'react-icons/io5';
import { LuWallet2 } from 'react-icons/lu';
import { RiHome3Line, RiProfileLine } from 'react-icons/ri';
import { TbFileInvoice } from 'react-icons/tb';
import { CiBoxes } from 'react-icons/ci';
import { usePathname, useRouter } from 'next/navigation';
import { MdLogout } from 'react-icons/md';
import { useMutation } from '@tanstack/react-query';
import apiCall from '@/helper/apiCall';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '@/contexts/UserContext';
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
import { Button } from './ui/button';

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [isDialogBottomOpen, setIsDialogBottomOpen] =
    React.useState<boolean>(false);
  const [isDialogUpOpen, setIsDialogUpOpen] = React.useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setUser } = React.useContext(UserContext);

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.post('/api/auth/logout');
      return data;
    },
    onSuccess: (data) => {
      setIsDialogOpen(false);
      setIsDialogUpOpen(false);
      setIsDialogBottomOpen(false);
      localStorage.removeItem('token');
      setUser(null);
      toast('Logout success', {
        onClose: () => {
          router.replace('/login');
        },
      });
      console.log(data);
    },
    onError: (error) => {
      setIsDialogOpen(false);
      setIsDialogUpOpen(false);
      setIsDialogBottomOpen(false);
      toast('Logout failed');
      console.log(error);
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  const handleClickUpButton = () => {
    setIsDialogUpOpen(true);
  };
  const handleClickBottomButton = () => {
    setIsDialogBottomOpen(true);
  };

  return (
    <div
      className={`w-full md:w-[20%] border-r-solid border-r-black border-r md:rounded-l-xl fixed md:relative transition-transform duration-300 
    bg-white z-20`}
    >
      <ToastContainer />
      <div className="hidden md:block">
        <div className="w-full flex flex-col">
          <div className="w-full flex-col flex gap-3 p-5">
            <p>MAIN MENU</p>
            <div className="w-full flex flex-col justify-center gap-3">
              <div
                className={`w-full flex gap-3 p-3 items-center cursor-pointer ${
                  pathname.includes('/dashboard') &&
                  'shadow-lg rounded-xl border-solid border border-slate-200'
                }`}
                onClick={() => router.push('/user/dashboard')}
              >
                <RiHome3Line size={20} />
                <p className="text-slate-400">Dashboard</p>
              </div>
              <div
                className={`w-full flex gap-3 p-3 items-center cursor-pointer ${
                  pathname.includes('/profile') &&
                  'shadow-lg rounded-xl border-solid border border-slate-200'
                }`}
                onClick={() => router.push('/user/profile')}
              >
                <RiProfileLine size={20} />
                <p className="text-slate-400">Profile</p>
              </div>
              <div
                className={`w-full flex gap-3 p-3 items-center cursor-pointer ${
                  pathname.includes('/product') &&
                  'shadow-lg rounded-xl border-solid border border-slate-200'
                }`}
                onClick={() => router.push('/user/product')}
              >
                <CiBoxes size={20} />
                <p className="text-slate-400">Products</p>
              </div>
              <div className="w-full flex gap-3 p-3 items-center">
                <GrTransaction size={20} />
                <p className="text-slate-400">Transactions</p>
              </div>
              <div className="w-full flex gap-3 p-3 items-center">
                <LuWallet2 size={20} />
                <p className="text-slate-400">My Wallet</p>
              </div>
              <div
                className={`w-full flex gap-3 items-center cursor-pointer p-3 ${
                  pathname.includes('/invoice') &&
                  'shadow-lg rounded-xl border-solid border border-slate-200'
                }`}
                onClick={() => router.push('/user/invoice')}
              >
                <TbFileInvoice size={20} />
                <p className="text-slate-400">Invoices</p>
              </div>
              <div className="w-full flex gap-3 p-3 items-center">
                <AiOutlinePieChart size={20} />
                <p className="text-slate-400">Reports</p>
              </div>
            </div>
          </div>
          <div className="w-full flex-col flex gap-3 p-5">
            <p>PREFERENCES</p>
            <div className="w-full flex flex-col justify-center gap-3">
              <div className="w-full flex gap-3 p-3 items-center">
                <CiSettings size={20} />
                <p className="text-slate-400">Settings</p>
              </div>
              <div className="w-full flex gap-3 p-3 items-center">
                <IoHelpCircleOutline size={20} />
                <p className="text-slate-400">Help Center</p>
              </div>
            </div>
          </div>
          <div className="w-full p-5">
            <div
              onClick={handleClickUpButton}
              className="w-full flex gap-3 p-3 items-center cursor-pointer"
            >
              <MdLogout size={20} />
              <p className="text-slate-400">Logout</p>
              <AlertDialog
                open={isDialogUpOpen}
                onOpenChange={setIsDialogUpOpen} //this is the parent element
              >
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to log out?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      onClick={(e) => {
                        e.stopPropagation(); //By calling stopPropagation(),
                        //you can ensure that only the event on the target element is executed not the parent element.
                        setIsDialogUpOpen(false);
                        console.log(isDialogUpOpen);
                      }}
                      className="bg-red-500 text-white hover:bg-red-500 hover:text-white border-white border-0 border-none"
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout}>
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for screens under 400px */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around p-2 border-t">
        <div
          className={`flex flex-col items-center cursor-pointer ${
            pathname.includes('/dashboard') && 'text-blue-500'
          }`}
          onClick={() => router.push('/user/dashboard')}
        >
          <RiHome3Line size={20} />
          <p className="text-xs">Dashboard</p>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            pathname.includes('/profile') && 'text-blue-500'
          }`}
          onClick={() => router.push('/user/profile')}
        >
          <RiProfileLine size={20} />
          <p className="text-xs">Profile</p>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            pathname.includes('/product') && 'text-blue-500'
          }`}
          onClick={() => router.push('/user/product')}
        >
          <CiBoxes size={20} />
          <p className="text-xs">Products</p>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${
            pathname.includes('/invoice') && 'text-blue-500'
          }`}
          onClick={() => router.push('/user/invoice')}
        >
          <TbFileInvoice size={20} />
          <p className="text-xs">Invoices</p>
        </div>
        <div
          onClick={handleClickBottomButton}
          className="flex flex-col items-center cursor-pointer"
        >
          <MdLogout size={20} />
          <p className="text-xs">Logout</p>
          <AlertDialog
            open={isDialogBottomOpen}
            onOpenChange={setIsDialogBottomOpen}
          >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to log out?
                </AlertDialogTitle>
                <AlertDialogDescription>Make sure</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDialogBottomOpen(false);
                    console.log(isDialogBottomOpen);
                  }}
                  className="bg-red-500"
                >
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>
                  Logout
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
