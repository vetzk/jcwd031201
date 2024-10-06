import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useProfile from '@/helper/useProfile';
import * as React from 'react';

interface IPreviewProps {
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  clientEmail: string;
  products?: {
    product?: {
      name: string;
    };
    name: string;
    quantity: number;
    priceUnit: number;
    total: number;
  }[];
  totalAmount: number;
  bankAccount: string;
  accountNumber: string;
  accountName: string;
  paymentMethod: string;
}

const Preview: React.FunctionComponent<IPreviewProps> = (props) => {
  const token = localStorage.getItem('token') || '';
  const {
    data: profile,
    isError: errorProfile,
    isLoading: loadingProfile,
  } = useProfile(token);
  return (
    <div className="w-full flex flex-col gap-5 border-solid bg-slate-100 border border-slate-300 rounded-lg p-5">
      <p>Preview</p>
      <div className="w-full p-5 bg-white flex flex-col gap-3 border-solid border border-black rounded-lg">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Invoice</p>
            <p>Invoice Code INV/01233/123130</p>
          </div>
          <div>
            <p>
              {profile?.result ? profile.result.findProfile.companyName : ''}
            </p>
          </div>
        </div>
        <div className="w-full h-0.5 bg-slate-200"></div>
        <div className="w-full flex flex-col">
          <p>Client: {props.clientName}</p>
          <p>Address: {props.clientAddress}</p>
          <p>Phone: {props.clientPhone}</p>
          <p>Email: {props.clientEmail}</p>
          <p>Payment Method: {props.paymentMethod}</p>
        </div>
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.products?.map((e, i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{e.product?.name}</TableCell>
                  <TableCell>{e.quantity}</TableCell>
                  <TableCell>{e.priceUnit}</TableCell>
                  <TableCell>{e.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell>{props.totalAmount}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <div className="w-full flex flex-col">
          <p>Payment Information:</p>
          <p>Bank Account: {props.bankAccount}</p>
          <p>Account Number: {props.accountNumber}</p>
          <p>Account Name:{props.accountName}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
