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
import MenuItem from './MenuItem';
import BottomSideBar from './BottomSideBar';

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [isDialogBottomOpen, setIsDialogBottomOpen] =
    React.useState<boolean>(false);
  const [isDialogUpOpen, setIsDialogUpOpen] = React.useState<boolean>(false);
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
      toast.success('Logout success', {
        onClose: () => {
          router.replace('/login');
        },
        position: 'bottom-center',
      });
      console.log(data);
    },
    onError: (error) => {
      setIsDialogOpen(false);
      setIsDialogUpOpen(false);
      setIsDialogBottomOpen(false);
      toast('Logout failed', { position: 'bottom-center' });
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
      <div className="hidden md:block">
        <div className="w-full flex flex-col">
          <div className="w-full flex-col flex gap-3 p-5">
            <p>MAIN MENU</p>
            <div className="w-full flex flex-col justify-center gap-3">
              <MenuItem icon={RiHome3Line} label="Dashboard" path="dashboard" />
              <MenuItem icon={RiProfileLine} label="Profile" path="profile" />
              <MenuItem icon={CiBoxes} label="Products" path="product" />
              <MenuItem
                icon={GrTransaction}
                label="Transactions"
                path="transaction"
              />
              <MenuItem icon={LuWallet2} label="My Wallet" path="wallet" />
              <MenuItem icon={TbFileInvoice} label="Invoices" path="invoice" />
              <MenuItem icon={AiOutlinePieChart} label="Report" path="report" />
            </div>
          </div>
          <div className="w-full flex-col flex gap-3 p-5">
            <p>PREFERENCES</p>
            <div className="w-full flex flex-col justify-center gap-3">
              <MenuItem
                icon={CiSettings}
                label={'Settings'}
                path={'settings'}
              />
              <MenuItem
                icon={IoHelpCircleOutline}
                label={'Help Center'}
                path={'help'}
              />
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
        <BottomSideBar icon={RiHome3Line} label="Dashboard" path="/dashboard" />
        <BottomSideBar icon={RiProfileLine} label="Profile" path="/profile" />
        <BottomSideBar icon={CiBoxes} label="Products" path="/products" />
        <BottomSideBar icon={TbFileInvoice} label="Invoices" path="/invoice" />
        <div
          onClick={handleClickBottomButton}
          className="flex flex-col items-center cursor-pointer"
        >
          <MdLogout size={20} />
          <p className="text-xs text-slate-400">Logout</p>
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
