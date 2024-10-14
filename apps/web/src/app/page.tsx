'use client';
import { Button } from '@/components/ui/button';
import * as React from 'react';

import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';
import { TbFileInvoice } from 'react-icons/tb';
import { RiHome3Line, RiProfileLine } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import { CiBoxes } from 'react-icons/ci';
import { useMutation } from '@tanstack/react-query';
import { UserContext } from '@/contexts/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiCall from '@/helper/apiCall';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

  const { setUser, user } = React.useContext(UserContext);

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.post('/api/auth/logout');
      return data;
    },
    onSuccess: (data) => {
      setIsDialogOpen(false);
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
      toast('Logout failed');
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
    <main className="w-full flex flex-col gap-20 overflow-hidden">
      {user && user?.email !== '' && (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around p-2 border-t z-10">
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
            className="flex flex-col items-center cursor-pointer"
            onClick={handleClickButton}
          >
            <MdLogout size={20} />
            <p className="text-xs">Logout</p>
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                      setIsDialogOpen(false);
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
      )}
      <div className="w-full flex flex-col md:flex-row justify-between px-5 md:px-20 py-20 md:py-28 bg-black/85 gap-10 md:gap-28">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-10 md:gap-16">
          <div className="w-full flex flex-col justify-center items-center text-white gap-3 md:gap-5">
            <p className="text-3xl md:text-7xl md:text-start text-center">
              Solving all your Invoicing problems here
            </p>
            <p className="text-sm md:text-xl text-white/25 md:text-start text-center">
              Streamline Your Entire Invoicing Process and Get Paid Faster with
              Automated Solutions
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center gap-5">
            <Button className="rounded-3xl p-4 md:p-8 bg-transparent border border-solid border-white">
              Sign up for free
            </Button>
            <Button className="rounded-3xl p-4 md:p-8 bg-green-500">
              Whatsapp sales
            </Button>
          </div>
          <div className="w-full flex gap-2 md:gap-5 text-white/25 justify-between md:justify-start text-sm">
            <p className="w-1/2 md:w-auto">No credit card required</p>
            <p className="hidden md:block">|</p>
            <p className="w-1/2 md:w-auto">All premium features for 14 days</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-60 md:h-auto">
          <Image
            src="/invoice.png"
            alt="invoice"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center relative px-5 md:px-20 gap-5 md:gap-0">
        <Image src="/zoom.png" alt="zoom" width={100} height={30} />
        <p className="hidden md:block">|</p>
        <Image src="/webflow.png" alt="webflow" width={100} height={30} />
        <p className="hidden md:block">|</p>
        <Image src="/slack.png" alt="slack" width={100} height={30} />
        <p className="hidden md:block">|</p>
        <Image src="/coinbase.png" alt="coinbase" width={100} height={30} />
        <p className="hidden md:block">|</p>
        <Image src="/dropbox.png" alt="dropbox" width={100} height={30} />
      </div>

      <div className="w-full flex flex-col items-center px-5 md:px-20 gap-10 md:gap-20">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10">
            <p className="text-3xl md:text-6xl font-bold text-center md:text-left">
              All in one invoice platform
            </p>
            <p className="text-center md:text-left">
              Track your entire project from start to finish with beautiful
              views that make project planning a breeze manage your resources
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <Button className="p-4 md:p-9 rounded-[2rem] text-lg md:text-xl">
              View all features
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col justify-center md:items-start items-center gap-5 relative text-center">
            <Image
              src="/icon-invoice.png"
              alt="invoice"
              width={50}
              height={30}
            />
            <div className="w-full h-0.5 bg-slate-300"></div>
            <p className="text-xl md:text-2xl font-bold">Invoicing is Easy</p>
            <p>
              Save time by automating the creation and sending of invoices,
              reducing manual effort and minimizing human error
            </p>
          </div>
          <div className="flex flex-col justify-center md:items-start items-center gap-5 relative text-center">
            <Image
              src="/help-desk.png"
              alt="help-desk"
              width={50}
              height={30}
            />
            <div className="w-full h-0.5 bg-slate-300"></div>
            <p className="text-xl md:text-2xl font-bold">Unlimited Support</p>
            <p>
              Save time by automating the creation and sending of invoices,
              reducing manual effort and minimizing human error
            </p>
          </div>
          <div className="flex flex-col justify-center md:items-start items-center gap-5 relative text-center">
            <Image src="/folder.png" alt="folder" width={50} height={30} />
            <div className="w-full h-0.5 bg-slate-300"></div>
            <p className="text-xl md:text-2xl font-bold">
              Organized & Automation
            </p>
            <p>
              Save time by automating the creation and sending of invoices,
              reducing manual effort and minimizing human error
            </p>
          </div>
          <div className="flex flex-col justify-center md:items-start items-center gap-5 relative text-center">
            <Image src="/earth.png" alt="earth" width={50} height={30} />
            <div className="w-full h-0.5 bg-slate-300"></div>
            <p className="text-xl md:text-2xl font-bold">Over 100 Countries</p>
            <p>
              Save time by automating the creation and sending of invoices,
              reducing manual effort and minimizing human error
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-5 md:px-20 gap-10 md:gap-20 py-10 md:py-20">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-5">
          <p className="text-3xl md:text-6xl font-bold text-center">
            How does it work
          </p>
          <p className="text-center">
            Create professional, branded invoices that match your business
            identity, leaving a lasting impression on clients. Easily set up
            recurring invoices for repeat clients, automating the billing
            process for ongoing projects or subscriptions.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
          <div className="flex gap-5 items-start">
            <div className="md:flex flex-col items-center hidden">
              <GoDotFill size={30} color="red" />
              <div className="w-1 h-24 md:h-44 border-l-4 md:border-l-8 border-dotted border-slate-300"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl md:text-3xl font-bold text-center md:text-left">
                Track your time calculate the expenses
              </p>
              <p className="text-center md:text-left">
                Track your time calculate the expenses
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-40 md:h-60 bg-red-300 relative mt-5 md:mt-0">
            <Image
              src="/task.png"
              alt=""
              layout="fill"
              objectFit="contain"
              className="p-5"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
          <div className="flex gap-5 items-start">
            <div className="md:flex flex-col items-center hidden">
              <GoDotFill size={30} color="yellow" />
              <div className="w-1 h-24 md:h-44 border-l-4 md:border-l-8 border-dotted border-slate-300"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl md:text-3xl font-bold text-center md:text-left">
                Track your time calculate the expenses
              </p>
              <p className="text-center md:text-left">
                Track your time calculate the expenses
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-40 md:h-60 bg-yellow-300 relative mt-5 md:mt-0">
            <Image
              src="/report.png"
              alt=""
              layout="fill"
              objectFit="contain"
              className="p-5"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
          <div className="flex gap-5 items-start">
            <div className="md:flex flex-col items-center hidden">
              <GoDotFill size={30} color="green" />
              <div className="w-1 h-24 md:h-44 border-l-4 md:border-l-8 border-dotted border-slate-300"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl md:text-3xl font-bold text-center md:text-left">
                Accept payments on time and from many payment methods
              </p>
              <p className="text-center md:text-left">
                Track your time calculate the expenses
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-40 md:h-60 bg-green-300 relative mt-5 md:mt-0">
            <Image
              src="/analyze.png"
              alt=""
              layout="fill"
              objectFit="contain"
              className="p-5"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-5 md:px-20 gap-10 md:gap-32 py-10 md:py-20 bg-black/85">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2 relative h-60 md:h-auto">
            <Image
              src="/invoice.png"
              alt="invoice"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10">
            <p className="text-white text-2xl md:text-4xl font-bold text-center md:text-left">
              Generate, upload, and sort your invoice in one place
            </p>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex gap-5">
                <div className="w-1 h-full bg-slate-500"></div>
                <div className="w-full flex flex-col gap-2">
                  <p className="text-xl md:text-2xl font-bold text-white">
                    Generate or send one or multiple documents
                  </p>
                  <p className="text-slate-400">
                    Generate tax-compliant invoices, track payments for tax
                    purposes, and simplify end-of-year accounting with detailed
                    reports.
                  </p>
                  <div className="w-full h-0.5 bg-slate-600"></div>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="w-1 h-full bg-slate-500"></div>
                <div className="w-full flex flex-col gap-2">
                  <p className="text-xl md:text-2xl font-bold text-white">
                    You can send invoices in multiple currencies
                  </p>
                  <p className="text-slate-400">
                    Access analytics and reports on your invoicing history,
                    helping you identify trends, overdue payments, and
                    opportunities to optimize your billing process.
                  </p>
                  <div className="w-full h-0.5 bg-slate-600"></div>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="w-1 h-full bg-slate-500"></div>
                <div className="w-full flex flex-col gap-2">
                  <p className="text-xl md:text-2xl font-bold text-white">
                    Automatic sorting and click for your approval
                  </p>
                  <p className="text-slate-400">
                    Generate tax-compliant invoices, track payments for tax
                    purposes, and simplify end-of-year accounting with detailed
                    reports.
                  </p>
                  <div className="w-full h-0.5 bg-slate-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10">
            <p className="text-white text-2xl md:text-4xl font-bold text-center md:text-left">
              Receive your payments and their impact on your finance
            </p>
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex gap-5">
                <div className="w-1 h-full bg-slate-500"></div>
                <div className="w-full flex flex-col gap-2">
                  <p className="text-xl md:text-2xl font-bold text-white">
                    Generate or send one or multiple documents
                  </p>
                  <p className="text-slate-400">
                    Generate tax-compliant invoices, track payments for tax
                    purposes, and simplify end-of-year accounting with detailed
                    reports.
                  </p>
                  <div className="w-full h-0.5 bg-slate-600"></div>
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className="w-1 h-full bg-slate-500"></div>
                <div className="w-full flex flex-col gap-2">
                  <p className="text-xl md:text-2xl font-bold text-white">
                    You can send invoices in multiple currencies
                  </p>
                  <p className="text-slate-400">
                    Access analytics and reports on your invoicing history,
                    helping you identify trends, overdue payments, and
                    opportunities to optimize your billing process.
                  </p>
                  <div className="w-full h-0.5 bg-slate-600"></div>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="w-full flex gap-5">
                <div className="w-1 h-full bg-slate-500"></div>
                <div className="w-full flex flex-col gap-2">
                  <p className="text-xl md:text-2xl font-bold text-white">
                    Automatic sorting and click for your approval
                  </p>
                  <p className="text-slate-400">
                    Generate tax-compliant invoices, track payments for tax
                    purposes, and simplify end-of-year accounting with detailed
                    reports.
                  </p>
                  <div className="w-full h-0.5 bg-slate-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-60 md:h-auto">
            <Image
              src="/analyze.png"
              alt="invoice"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-5 md:px-20 py-10 md:py-20 gap-10 md:gap-20">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10">
            <p className="text-3xl md:text-6xl font-bold text-center md:text-left">
              What our clients say
            </p>
            <p className="text-center md:text-left">
              Track your entire project from start to finish with beautiful
              views that make project planning a breeze manage your resources
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <Button className="p-4 md:p-9 rounded-[2rem] text-lg md:text-xl">
              View all stories
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
          <div className="w-full md:w-1/3 flex flex-col bg-red-200 p-5 gap-5 md:gap-10 rounded-xl">
            <div className="w-full flex items-center gap-5">
              <div className="relative h-12 w-12 md:h-16 md:w-16">
                <Image
                  src="/olly.jpg"
                  alt="Palmer Beckett"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold">Palmer Beckett</p>
                <p className="text-sm text-slate-500">Marketing Director</p>
              </div>
            </div>
            <div className="w-full">
              <p>
                This platform has completely transformed how we manage our
                invoices. We used to spend hours each week creating, sending,
                and tracking invoices manually, but now everything is automated.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col bg-yellow-200 p-5 gap-5 md:gap-10 rounded-xl">
            <div className="w-full flex items-center gap-5">
              <div className="relative h-12 w-12 md:h-16 md:w-16">
                <Image
                  src="/sandra.jpg"
                  alt="Sandra Robert"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold">Sandra Robert</p>
                <p className="text-sm text-slate-500">Marketing Director</p>
              </div>
            </div>
            <div className="w-full">
              <p>
                This platform has completely transformed how we manage our
                invoices. We used to spend hours each week creating, sending,
                and tracking invoices manually, but now everything is automated.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col bg-green-200 p-5 gap-5 md:gap-10 rounded-xl">
            <div className="w-full flex items-center gap-5">
              <div className="relative h-12 w-12 md:h-16 md:w-16">
                <Image
                  src="/gomez.jpg"
                  alt="Olly Beckett"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold">Olly Beckett</p>
                <p className="text-sm text-slate-500">Marketing Director</p>
              </div>
            </div>
            <div className="w-full">
              <p>
                This platform has completely transformed how we manage our
                invoices. We used to spend hours each week creating, sending,
                and tracking invoices manually, but now everything is automated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
