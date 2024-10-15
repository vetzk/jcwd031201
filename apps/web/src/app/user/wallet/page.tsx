import Sidebar from '@/components/Sidebar';
import * as React from 'react';

interface IWalletProps {}

const Wallet: React.FunctionComponent<IWalletProps> = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row mt-28 mb-10 mx-5 md:mx-10 rounded-xl border-slate-500 border border-solid">
        <Sidebar />
        <div className="flex-1">
          <div className="w-full flex justify-center items-center min-h-screen">
            <p className="text-5xl">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
