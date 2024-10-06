import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import QueryProvider from '@/utils/provider/QueryProvider';
import UserProvider from '@/contexts/UserContext';

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
            {/* <Footer /> */}
          </UserProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
