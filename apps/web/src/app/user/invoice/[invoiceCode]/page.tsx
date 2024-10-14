'use client';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import withAuth from '@/hoc/authGuard';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import Preview from './Preview';
import useInvoice from '@/helper/useInvoice';
import useProduct from '@/helper/useProduct';
import usePaymentDetails from '@/helper/usePaymentDetails';
import useClient from '@/helper/useClient';
import { ProductDetails, ProductType } from '../type';
import 'react-datepicker/dist/react-datepicker.css';
import { useMutation } from '@tanstack/react-query';
import apiCall from '@/helper/apiCall';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePayment from '@/helper/usePayment';
import usePaymentMethod from '@/helper/usePaymentMethod';
import { MdOutlineDelete } from 'react-icons/md';
import Alert from '@/components/Alert';

interface IInvoiceDetailProps {
  params: {
    invoiceCode: string;
  };
}

type InvoiceType = {
  name: string;
  quantity: number;
  priceUnit: number;
  priceTotal: number;
  product?: {
    name: string;
  };
};

const InvoiceDetail: React.FunctionComponent<IInvoiceDetailProps> = ({
  params,
}) => {
  const [date, setDate] = React.useState<Date | null>(null);
  const [clientPay, setClientPay] = React.useState<string>('');
  const [checked, setChecked] = React.useState<boolean>(false);
  const [clientVal, setClientVal] = React.useState<string>('');
  const [paymentVal, setPaymentVal] = React.useState<string>('');
  const [paymentTypeVal, setPaymentTypeVal] = React.useState<string>('');
  const [clientName, setClientName] = React.useState<string>('');
  const [clientAddress, setClientAddress] = React.useState<string>('');
  const [clientPhone, setClientPhone] = React.useState<string>('');
  const [clientEmail, setClientEmail] = React.useState<string>('');
  const [bankAccount, setBankAccount] = React.useState<string>('');
  const [accountName, setAccountName] = React.useState<string>('');
  const [accountNumber, setAccountNumber] = React.useState<string>('');
  const [reccuringDate, setRecurringDate] = React.useState<string>('');

  const [invoiceStatus, setInvoiceStatus] = React.useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const token = localStorage.getItem('token') || '';
  const {
    data: products,
    isError: productError,
    isLoading: productLoading,
  } = useProduct(token);
  const [invoiceProducts, setInvoiceProducts] = React.useState<InvoiceType[]>([
    { name: '', quantity: 1, priceUnit: 0, priceTotal: 0 },
  ]);
  const [error, setError] = React.useState<{
    [key: string]: string | number | null | [];
  }>({
    clientVal: '',
    date: null,
    paymentTypeVal: '',
    paymentVal: '',
    recurringDate: '',
    invoiceStatus: '',
    invoiceProducts: '',
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    clientPhone: '',
    accountName: '',
    accountNumber: '',
    bankAccount: '',
  });
  const router = useRouter();

  const removeProduct = (index: number) => {
    setInvoiceProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const {
    data: invoice,
    isLoading,
    isError,
    refetch,
  } = useInvoice(token, params.invoiceCode);

  const {
    data: method,
    isError: methodError,
    isLoading: methodLoading,
  } = usePaymentMethod();

  const {
    data: details,
    isError: detailsError,
    isLoading: detailsLoading,
  } = usePaymentDetails(token);

  const {
    data: client,
    isError: clientError,
    isLoading: clientLoading,
  } = useClient(token);

  const {
    data: payment,
    isError: paymentError,
    isLoading: paymentLoading,
  } = usePayment();

  let totalAmount = 0;
  let subTotal = 0;

  for (let i = 0; i < invoiceProducts.length; i++) {
    const product = invoiceProducts[i];
    const qty = product.quantity;
    totalAmount += product.priceUnit * qty;
    subTotal += product.priceUnit * qty;
    console.log(totalAmount);
  }

  const formValidation = () => {
    setError({
      clientVal: '',
      date: null,
      paymentTypeVal: '',
      paymentVal: '',
      recurringDate: '',
      invoiceStatus: '',
      invoiceProducts: '',
      clientName: '',
      clientEmail: '',
      clientAddress: '',
      clientPhone: '',
      accountName: '',
      accountNumber: '',
      bankAccount: '',
    });

    let isValid = true;

    if (!date) {
      setError((prev) => ({ ...prev, date: 'Please fill the due date' }));
      isValid = false;
    }

    // if (!paymentTypeVal) {
    //   setError((prev) => ({
    //     ...prev,
    //     paymentTypeVal: 'Please select payment type',
    //   }));
    //   isValid = false;
    // }

    if (!reccuringDate) {
      setError((prev) => ({
        ...prev,
        reccuringDate: 'Please select reccuring date',
      }));
      isValid = false;
    }

    if (!invoiceStatus) {
      setError((prev) => ({
        ...prev,
        invoiceStatus: 'Please choose invoice status',
      }));
    }

    if (
      !invoiceProducts.length ||
      invoiceProducts.some(
        (product) =>
          !product.name || product.quantity <= 0 || product.priceUnit < 0,
      )
    ) {
      setError((prev) => ({
        ...prev,
        invoiceProducts:
          'Invoice products must not be empty and each product must have a valid name, quantity (greater than 0), and price unit (not negative)',
      }));
      isValid = false;
    }

    if (!clientVal) {
      setError((prev) => ({ ...prev, clientVal: 'Please select your client' }));
      isValid = false;
    }

    if (
      clientVal === 'new' ||
      clientVal === invoice?.result[0].client.clientCode
    ) {
      if (!clientAddress) {
        setError((prev) => ({
          ...prev,
          clientAddress: 'Please fill the address',
        }));
        isValid = false;
      }
      if (!clientEmail) {
        setError((prev) => ({ ...prev, clientEmail: 'Please fill the email' }));
        isValid = false;
      }
      if (!clientName) {
        setError((prev) => ({ ...prev, clientName: 'Please fill the name' }));
        isValid = false;
      }
      if (!clientPhone) {
        setError((prev) => ({ ...prev, clientPhone: 'Please fill the phone' }));
        isValid = false;
      }
    }

    if (paymentTypeVal === 'BANK_TRANSFER') {
      if (!bankAccount) {
        setError((prev) => ({
          ...prev,
          bankAccount: 'Please fill your bank account',
        }));
        isValid = false;
      }
      if (!accountNumber) {
        setError((prev) => ({
          ...prev,
          accountNumber: 'Please fill your account number',
        }));
        isValid = false;
      }
      if (!accountName) {
        setError((prev) => ({
          ...prev,
          accountName: 'Please fill your account name',
        }));
        isValid = false;
      }
    }

    if (!paymentVal) {
      setError((prev) => ({
        ...prev,
        paymentVal: 'Please choose your payment method',
      }));
      isValid = false;
    }

    return isValid;
  };
  const handleClickButton = () => {
    if (formValidation()) {
      setIsDialogOpen(true);
    }
  };

  const handleUpdate = useMutation({
    mutationFn: async () => {
      const productCodes = invoiceProducts.map((product) => product.name);
      console.log(productCodes);

      const qtys = invoiceProducts.map((product) => product.quantity);
      console.log(qtys);
      const { data } = await apiCall.patch(
        `/api/invoice/${params.invoiceCode}`,
        {
          name: clientName,
          address: clientAddress,
          phone: clientPhone,
          email: clientEmail,
          paymentType: paymentTypeVal,
          paymentCode: paymentVal,
          date,
          bankAccount,
          accountName,
          accountNumber,
          addRecurringDate: reccuringDate,
          invoiceStatus,
          clientCode: clientVal,
          clientPayment: clientPay,
          productCodes,
          recurringDays: Number(reccuringDate),
          qtys,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return data;
    },
    onSuccess: (data) => {
      setIsDialogOpen(false);
      setChecked(false);
      toast('Update invoice success', {
        onClose: () => {
          router.replace('/user/invoice');
        },
      });
    },
    onError: (error: any) => {
      setIsDialogOpen(false);
      toast('Update invoice failed');
      console.log(error);
    },
  });

  const handleUpdateInvoice = () => {
    handleUpdate.mutate();
  };

  const sendInvoice = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.post(
        '/api/invoice/sendinvoice',
        {
          invoiceCode: params.invoiceCode,
          email: clientEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return data;
    },
    onSuccess: (data) => {
      toast('Send invoice success');
      console.log(data);
    },
    onError: (error) => {
      toast('Failed to send invoice');
      console.log(error);
    },
  });

  const handleSendInvoice = () => {
    sendInvoice.mutate();
  };

  const addItem = () => {
    setInvoiceProducts([
      ...invoiceProducts,
      { name: '', quantity: 0, priceUnit: 0, priceTotal: 0 },
    ]);
  };

  React.useEffect(() => {
    console.log(invoice);

    if (invoice) {
      const invoiceData = invoice.result[0];
      setInvoiceStatus(invoiceData.invoiceStatus);
      setClientName(invoiceData.client.name);
      setClientAddress(invoiceData.client.address);
      setClientPhone(invoiceData.client.phone);
      setClientEmail(invoiceData.client.email);
      setClientVal(invoiceData.client.clientCode);
      setDate(invoiceData.invoiceDate);
      setRecurringDate(String(invoiceData.recurringDays));
      setPaymentVal(invoiceData.paymentdetails.paymentCode);
      setClientPay(invoiceData.client.clientpayment.paymentMethod);
      const formattedProducts = invoiceData.invoicedetail.map(
        (detail: any) => ({
          name: detail.product?.productCode || '', // productCode should be in product field
          quantity: detail.qty || 1,
          priceUnit: detail.priceUnit || 0,
          priceTotal: detail.priceTotal || 0,
          product: detail.product, // Reference to product object
        }),
      );

      setInvoiceProducts(formattedProducts);

      refetch();
    }
  }, [invoice, clientVal, products, refetch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <div className="loader mb-4 border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
          <div className="text-4xl font-semibold text-gray-700">
            Loading Invoice...
          </div>
        </div>

        <style jsx>{`
          .loader {
            border-top-color: transparent;
            border-right-color: transparent;
            border-radius: 50%;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ToastContainer />
      <div className="flex flex-col md:flex-row mt-28 mb-10 mx-5 md:mx-10 rounded-xl border-slate-500 border border-solid">
        <Sidebar />
        <div className="flex-1">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-5 md:flex-row md:items-center md:justify-between border-b border-b-black border-b-solid p-5">
              <div className="w-full flex justify-between md:justify-start items-center gap-5">
                <p className="md:text-2xl text-lg font-bold">Update Invoice</p>
                <p className="text-xl hidden md:block">|</p>
                <div className="flex items-center gap-3">
                  <p className="">Show Preview</p>
                  <Switch
                    checked={checked}
                    onCheckedChange={setChecked}
                    className={
                      checked
                        ? 'data-[state=checked]:bg-green-500'
                        : 'data-[state=unchecked]:bg-red-500'
                    }
                  />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  onClick={handleSendInvoice}
                  className="bg-white border-slate-300 border border-solid text-black hover:bg-transparent"
                >
                  Send PDF via Email
                </Button>
                <Button
                  onClick={handleClickButton}
                  className="bg-green-400 text-white hover:bg-green-400"
                >
                  Update Invoice
                </Button>
                <Alert
                  isDialogOpen={isDialogOpen}
                  setIsDialogOpen={setIsDialogOpen}
                  title={'Are your sure you want to update invoice?'}
                  description={' Make sure the informations are correct.'}
                  actionText={'Update Invoice'}
                  handleFunc={handleUpdateInvoice}
                />
              </div>
            </div>
            <div className="w-full p-5 flex gap-5 md:flex-row flex-col">
              <div className="w-full flex flex-col gap-5 border-solid border border-slate-300 rounded-lg p-5">
                <div className="w-full flex flex-col gap-3">
                  <p>Invoice Details</p>
                  <div className="bg-slate-200 h-0.5 w-full"></div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <p>Client</p>
                  <Select
                    value={clientVal}
                    onValueChange={(e) => setClientVal(e)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Client" />
                    </SelectTrigger>
                    <SelectContent>
                      {client ? (
                        <>
                          <SelectItem value={'new'}>
                            + Add new client
                          </SelectItem>
                          {client.result.map((e: any) => (
                            <SelectItem key={e.id} value={e.clientCode}>
                              {e.name}
                            </SelectItem>
                          ))}
                        </>
                      ) : (
                        <SelectItem value={'new'}>+ Add new client</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  {clientVal === 'new' ? (
                    <div className="flex flex-col gap-5">
                      <p className="">Client&apos;s details</p>
                      <div className="flex flex-col gap-2">
                        <Label>Name</Label>
                        <Input placeholder="Client's name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label>Address</Label>
                        <Input placeholder="Client's address" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label>Phone</Label>
                        <Input placeholder="Client's phone" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input placeholder="Client's email" />
                      </div>
                    </div>
                  ) : (
                    clientVal === invoice?.result[0].client.clientCode && (
                      <div className="flex flex-col gap-5">
                        <p className="">Client&apos;s details</p>
                        <div className="flex flex-col gap-2">
                          <Label>Name</Label>
                          <Input
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            placeholder="Client's name"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label>Address</Label>
                          <Input
                            value={clientAddress}
                            onChange={(e) => setClientAddress(e.target.value)}
                            placeholder="Client's address"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label>Phone</Label>
                          <Input
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            placeholder="Client's phone"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label>Email</Label>
                          <Input
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            placeholder="Client's email"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label>Payment Method</Label>
                          <Select
                            value={clientPay}
                            onValueChange={(e) => setClientPay(e)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment" />
                            </SelectTrigger>
                            <SelectContent>
                              {method.result &&
                                method.result.map((e: any, i: number) => (
                                  <SelectItem key={i} value={e.paymentMethod}>
                                    {e.paymentMethod}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="w-full flex items-center md:flex-row flex-col md:justify-between gap-5">
                  <div className="md:w-auto w-full flex flex-col gap-3">
                    <Label>Due Date</Label>
                    <DatePicker
                      selected={date}
                      onChange={(date) => setDate(date)}
                      className="w-full border-slate-200 shadow-sm border border-solid rounded-md p-1"
                    />
                  </div>
                  <div className="md:w-1/4 w-full flex flex-col gap-3">
                    <Label>Status</Label>
                    <Select
                      value={invoiceStatus}
                      onValueChange={(e) => setInvoiceStatus(e)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="PAID">PAID</SelectItem>
                        <SelectItem value="UNPAID">UNPAID</SelectItem>
                        <SelectItem value="OVERDUE">OVERDUE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:w-auto w-full flex flex-col gap-3">
                    <Label>Recurring Date</Label>
                    <Select
                      value={reccuringDate}
                      onValueChange={(e) => setRecurringDate(String(e))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="7">7</SelectItem>
                        <SelectItem value="14">14</SelectItem>
                        <SelectItem value="21">21</SelectItem>
                        <SelectItem value="30">30</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <p>Invoice Product</p>
                  <div className="bg-slate-200 h-0.5 w-full"></div>
                </div>
                {invoiceProducts.map((e, i) => (
                  <div
                    key={i}
                    className="w-full md:flex-row flex-col flex items-center gap-5"
                  >
                    <div className="w-full flex flex-col gap-3">
                      <Label>Product Name</Label>
                      <Select
                        value={e.name || ''}
                        onValueChange={(value) => {
                          const updatedProducts = [...invoiceProducts];

                          const selectedProduct = products.result.find(
                            (product: any) => product.productCode === value,
                          );
                          console.log(selectedProduct);
                          updatedProducts[i] = {
                            ...updatedProducts[i],
                            name: value,
                            priceUnit: selectedProduct
                              ? selectedProduct.price
                              : 0, // Step to update priceUnit
                            priceTotal:
                              updatedProducts[i].quantity ||
                              0 * (selectedProduct ? selectedProduct.price : 0), // Update priceTotal as well

                            product: {
                              name: selectedProduct.name,
                            },
                          };
                          console.log(updatedProducts);

                          setInvoiceProducts(updatedProducts);
                          console.log(invoiceProducts);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          {products && products.result.length > 0 ? (
                            products.result.map((product: any) => (
                              <SelectItem
                                key={product.productCode}
                                value={product.productCode}
                              >
                                {product.name}
                              </SelectItem>
                            ))
                          ) : (
                            <p>You have no product</p>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:w-auto w-full flex flex-col gap-3">
                      <Label>Quantity</Label>
                      <Input
                        value={e.quantity ?? 1}
                        onChange={(ev) => {
                          const updatedProducts = [...invoiceProducts];
                          updatedProducts[i].quantity = parseInt(
                            ev.target.value,
                            10,
                          );
                          updatedProducts[i].priceTotal =
                            updatedProducts[i].quantity *
                            updatedProducts[i].priceUnit;
                          setInvoiceProducts(updatedProducts);
                        }}
                        type="number"
                        placeholder="quantity"
                      />
                    </div>
                    <div className="md:w-auto w-full flex flex-col gap-3">
                      <Label>Price Unit</Label>
                      <Input
                        value={e.priceUnit}
                        onChange={(ev) => {
                          const updatedProducts = [...invoiceProducts];
                          updatedProducts[i].priceUnit = parseFloat(
                            ev.target.value,
                          );
                          updatedProducts[i].priceTotal =
                            updatedProducts[i].quantity ||
                            0 * updatedProducts[i].priceUnit;
                          setInvoiceProducts(updatedProducts);
                        }}
                        type="number"
                        placeholder="price unit"
                      />
                    </div>
                    <div className="md:w-auto w-full flex flex-col gap-3">
                      <Label>Total</Label>
                      <Input
                        type="number"
                        value={e.priceTotal}
                        placeholder="total"
                        readOnly
                      />
                    </div>
                    <div className="md:mt-7 cursor-pointer">
                      <MdOutlineDelete
                        size={30}
                        onClick={() => removeProduct(i)}
                      />
                    </div>
                  </div>
                ))}
                {error.invoiceProducts && (
                  <p className="text-red-500">{error.invoiceProducts}</p>
                )}

                <div className="w-full flex items-center gap-2 cursor-pointer">
                  <Button
                    disabled={products.result.length === invoiceProducts.length}
                    onClick={addItem}
                    className="underline bg-transparent hover:bg-transparent shadow-none text-green-700"
                  >
                    + Add item
                  </Button>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <p>Payment Method</p>
                  <div className="bg-slate-200 h-0.5 w-full"></div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <Select
                    value={invoice?.result[0].paymentdetails.paymentCode}
                    onValueChange={(e) => setPaymentVal(e)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                      {details ? (
                        <>
                          <SelectItem value={'new'}>
                            + Add new payment method
                          </SelectItem>
                          {details.result.map((e: any, i: number) => (
                            <React.Fragment key={i}>
                              <SelectItem value={e.paymentCode}>
                                {e.accountName}
                              </SelectItem>
                            </React.Fragment>
                          ))}
                        </>
                      ) : (
                        <SelectItem value={'new'}>
                          + Add new payment method
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  {error.paymentVal && (
                    <p className="text-red-500">{error.paymentVal}</p>
                  )}
                  {paymentVal === 'new' && (
                    <div className="flex flex-col gap-5">
                      <p>Payment Type</p>
                      <Select onValueChange={(e) => setPaymentTypeVal(e)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Payment Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {payment.result.map((e: any, i: number) => (
                            <SelectItem key={i} value={e.paymentType}>
                              {e.paymentType}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {paymentTypeVal === 'BANK_TRANSFER' && (
                        <div className="flex flex-col gap-5">
                          <p className="">Payment Details</p>
                          <div className="flex flex-col gap-2">
                            <Label>Bank Account</Label>
                            <Input
                              placeholder="Bank account"
                              onChange={(e) => setBankAccount(e.target.value)}
                            />
                            {error.bankAccount && (
                              <p className="text-red-500">
                                {error.bankAccount}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col gap-2">
                            <Label>Account Number</Label>
                            <Input
                              placeholder="Account Number"
                              onChange={(e) => setAccountNumber(e.target.value)}
                            />
                            {error.accountNumber && (
                              <p className="text-red-500">
                                {error.accountNumber}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col gap-2">
                            <Label>Account Name</Label>
                            <Input
                              placeholder="Account name"
                              onChange={(e) => setAccountName(e.target.value)}
                            />
                            {error.accountName && (
                              <p className="text-red-500">
                                {error.accountName}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              {checked && (
                <Preview
                  companyName={clientName}
                  clientName={clientName}
                  clientAddress={clientAddress}
                  clientPhone={clientPhone}
                  clientEmail={clientEmail}
                  products={invoiceProducts}
                  totalAmount={totalAmount}
                  bankAcc={invoice.result[0].paymentdetails.bankAccount}
                  accountNumber={invoice.result[0].paymentdetails.accountNumber}
                  accountName={invoice.result[0].paymentdetails.accountName}
                  paymentMethod={
                    invoice.result[0].client.clientpayment.paymentMethod
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(InvoiceDetail);
