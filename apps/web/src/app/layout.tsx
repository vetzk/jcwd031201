import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import QueryProvider from '@/utils/provider/QueryProvider';
import UserProvider from '@/contexts/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Invo',
  description: 'Invoice App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <UserProvider>
            <Navbar />
            {children}
            <ToastContainer
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* <Footer /> */}
          </UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
