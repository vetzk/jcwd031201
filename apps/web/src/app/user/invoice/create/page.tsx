'use client';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MdOutlineDelete } from 'react-icons/md';
import apiCall from '@/helper/apiCall';
import useClient from '@/helper/useClient';
import usePayment from '@/helper/usePayment';
import useProduct from '@/helper/useProduct';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
} from '@/components/ui/alert-dialog';
import usePaymentDetails from '@/helper/usePaymentDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ProductDetails, ProductType } from '../type';
import usePaymentMethod from '@/helper/usePaymentMethod';
import Preview from './Preview';

interface ICreateInvoiceProps {}

const ClientDetailsForm = (
  label: string,
  placeholder: string,
  setValue: (e: string) => void,
) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const ProductForm = ({
  index,
  handleProductChange,
  products,
  selectedProduct,
  removeProduct,
}: {
  index: number;
  handleProductChange: (
    index: number,
    key: string,
    value: string | number,
  ) => void;
  products: ProductDetails[];
  selectedProduct: ProductType | null;
  removeProduct: (index: number) => void;
}) => (
  <div className="w-full flex items-center gap-5">
    <div className="w-1/2 flex flex-col gap-3">
      <Label>Product Name</Label>
      <Select
        onValueChange={(value) => {
          const selectedProd = products.find((p) => p.name === value);
          handleProductChange(index, 'name', value);
          if (selectedProd) {
            handleProductChange(index, 'priceUnit', selectedProd.price);
          }
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select product" />
        </SelectTrigger>
        <SelectContent>
          {products && products.length > 0 ? (
            products.map((product) => (
              <SelectItem key={product.productCode} value={product.productCode}>
                {product.name}
              </SelectItem>
            ))
          ) : (
            <p>You have no product</p>
          )}
        </SelectContent>
      </Select>
    </div>

    {/* Quantity Input */}
    <div className="flex flex-col gap-3">
      <Label>Quantity</Label>
      <Input
        type="number"
        placeholder="quantity"
        onChange={(e) => {
          const quantity = parseInt(e.target.value, 10);
          handleProductChange(index, 'quantity', quantity);

          // Calculate total dynamically when quantity changes
          const priceUnit = selectedProduct?.priceUnit || 0;
          handleProductChange(index, 'total', priceUnit * quantity);
        }}
      />
    </div>
    <div className="flex flex-col gap-3">
      <Label>Price Unit</Label>
      <Input
        type="number"
        value={selectedProduct?.priceUnit || ''}
        placeholder="price unit"
        readOnly
      />
    </div>
    <div className="flex flex-col gap-3">
      <Label>Total</Label>
      <Input
        type="number"
        value={selectedProduct?.total || 0}
        placeholder="total"
        readOnly
      />
    </div>
    <div className="mt-7 cursor-pointer">
      <MdOutlineDelete size={30} onClick={() => removeProduct(index)} />
    </div>
  </div>
);

const CreateInvoice: React.FunctionComponent<ICreateInvoiceProps> = (props) => {
  const [date, setDate] = React.useState<Date | null>(null);
  const [checked, setChecked] = React.useState<boolean>(false);
  const [clientVal, setClientVal] = React.useState<string>('');
  const [paymentVal, setPaymentVal] = React.useState<string>('');
  const [clientName, setClientName] = React.useState<string>('');
  const [clientPay, setClientPay] = React.useState<string>('');
  const token = localStorage.getItem('token') || '';
  const {
    data: products,
    isError: productError,
    isLoading: productLoading,
  } = useProduct(token);
  const {
    data: details,
    isError: detailsError,
    isLoading: detailsLoading,
  } = usePaymentDetails(token);
  const [clientAddress, setClientAddress] = React.useState<string>('');
  const [clientPhone, setClientPhone] = React.useState<string>('');
  const [clientEmail, setClientEmail] = React.useState<string>('');
  const [bankAccount, setBankAccount] = React.useState<string>('');
  const [accountName, setAccountName] = React.useState<string>('');
  const [accountNumber, setAccountNumber] = React.useState<string>('');
  const [reccuringDate, setRecurringDate] = React.useState<string>('');
  const [paymentTypeVal, setPaymentTypeVal] = React.useState<string>('');
  const [invoiceStatus, setInvoiceStatus] = React.useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [invoiceProducts, setInvoiceProducts] = React.useState<ProductType[]>([
    { name: '', quantity: 0, priceUnit: 0, total: 0 },
  ]);
  const [selectedProducts, setSelectedProducts] = React.useState<
    (ProductDetails | null)[]
  >(products ? products?.result.map(() => null) : []);
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
    clientPay: '',
  });
  const router = useRouter();

  let totalAmount = 0;
  let subTotal = 0;

  for (let i = 0; i < invoiceProducts.length; i++) {
    const product = invoiceProducts[i];
    const qty = product.quantity;
    totalAmount += product.priceUnit * qty;
    subTotal += product.priceUnit * qty;
  }

  const addNewProduct = () => {
    setInvoiceProducts([
      ...invoiceProducts,
      { name: '', quantity: 1, priceUnit: 0, total: 0 },
    ]);
  };

  const removeProduct = (index: number) => {
    setInvoiceProducts((prev) => prev.filter((_, i) => i !== index));
  };

  // const handleProductChange = (
  //   index: number,
  //   key: string,
  //   value: string | number,
  // ) => {
  //   const updatedProducts = [...invoiceProducts];

  //   // Update the specific field (name, quantity, priceUnit, total)
  //   updatedProducts[index] = { ...updatedProducts[index], [key]: value };

  //   if (key === 'name') {
  //     // Handle product selection and price update
  //     const selectedProd = products?.result.find(
  //       (p: any) => p.productCode === value,
  //     );
  //     console.log(selectedProd);

  //     const updatedSelectedProducts = [...selectedProducts];
  //     updatedSelectedProducts[index] = selectedProd;

  //     updatedProducts[index].productName = selectedProd.name || '';
  //     updatedProducts[index].priceUnit = selectedProd?.price || 0;
  //     updatedProducts[index].total =
  //       selectedProd?.price * updatedProducts[index].quantity || 0;

  //     setSelectedProducts(updatedSelectedProducts);
  //     setInvoiceProducts(updatedProducts);
  //   }

  //   if (key === 'quantity') {
  //     const selectedProd =
  //       products?.result.find((p: any) => p.productCode === value) || null;
  //     console.log('select' + selectedProd);

  //     const updatedSelectedProducts = [...selectedProducts];
  //     console.log('update' + updatedSelectedProducts);

  //     updatedSelectedProducts[index] = selectedProd;

  //     updatedProducts[index].productName = selectedProd.name || '';
  //     updatedProducts[index].priceUnit = selectedProd?.price || 0;
  //     updatedProducts[index].total =
  //       selectedProd?.price * updatedProducts[index].quantity || 0;
  //     // Calculate total when quantity changes
  //     const priceUnit = updatedProducts[index].priceUnit || 0;
  //     const quantity = parseInt(value as string, 10) || 0;
  //     const quantityUpdated = parseInt(value as string, 10) || 0;

  //     invoiceProducts[index].quantity = quantity;
  //     updatedProducts[index].quantity = quantity;
  //     console.log(quantity);

  //     updatedProducts[index].total = priceUnit * quantity;
  //     setInvoiceProducts(updatedProducts);
  //     console.log(updatedProducts);
  //     console.log(invoiceProducts);

  //     // Ensure quantity and total are updated
  //   } else {
  //     setInvoiceProducts(updatedProducts); // Update for other fields
  //   }
  // };

  const mutation = useMutation({
    mutationFn: async () => {
      const productCodes = invoiceProducts.map((product) => product.name);
      console.log(productCodes);

      const qtys = invoiceProducts.map((product) => product.quantity);
      console.log(qtys);

      const { data } = await apiCall.post(
        '/api/invoice',
        {
          name: clientName,
          address: clientAddress,
          phone: clientPhone,
          email: clientEmail,
          date,
          paymentType: paymentTypeVal,
          paymentCode: paymentVal,
          bankAccount,
          accountName,
          accountNumber,
          addRecurringDate: reccuringDate,
          invoiceStatus,
          clientCode: clientVal,
          clientPayment: clientPay,
          recurringDays: Number(reccuringDate),
          productCodes,
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
      console.log(data);
      setChecked(false);
      setIsDialogOpen(false);
      toast('Create Invoice Success', {
        onClose: () => {
          router.replace('/user/invoice');
        },
      });
    },
    onError: (error: any) => {
      toast('Create Invoice Failed');
      console.log(error);
    },
  });

  const handleCreateInvoice = () => {
    mutation.mutate();
  };

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

    if (!clientPay) {
      setError((prev) => ({
        ...prev,
        clientPay: 'Please choose payment method',
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

    if (clientVal === 'new') {
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

  const { data: client, isError, isLoading } = useClient(token);
  const {
    data: method,
    isError: methodError,
    isLoading: methodLoading,
  } = usePaymentMethod();
  const {
    data: payment,
    isError: payError,
    isLoading: payLoading,
  } = usePayment();

  React.useEffect(() => {
    console.log(client);

    console.log(details);

    console.log(payment);
  }, [client, products, date, payment, details]);
  return (
    <div className="w-full">
      <ToastContainer />
      <div className="flex flex-col md:flex-row mt-28 mb-10 mx-5 md:mx-10 rounded-xl border-slate-500 border border-solid">
        <Sidebar />
        <div className="flex-1">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-5 md:flex-row md:items-center md:justify-between border-b border-b-black border-b-solid p-5">
              <div className="w-full flex justify-between md:justify-start items-center gap-5">
                <p className="md:text-2xl text-lg font-bold">New Invoice</p>
                <p className="text-xl hidden md:block">|</p>
                <div className="flex items-center gap-3">
                  <p>Show Preview</p>
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
                  onClick={() => router.replace('/user/invoice')}
                  className="bg-white border-slate-300 border border-solid text-black hover:bg-transparent"
                >
                  Save as Draft
                </Button>
                <Button
                  onClick={handleClickButton}
                  className="bg-green-400 text-white hover:bg-green-400"
                >
                  Create Invoice
                </Button>
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to create invoice?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Make sure the informations are correct.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-red-500 text-white">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={handleCreateInvoice}>
                        Create Invoice
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <div className="w-full p-5 flex gap-5 md:flex-row flex-col ">
              <div className="w-full flex flex-col gap-5 border-solid border border-slate-300 rounded-lg p-5">
                <div className="w-full flex flex-col gap-3">
                  <p>Invoice Details</p>
                  <div className="bg-slate-200 h-0.5 w-full"></div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <p>Client</p>
                  <Select onValueChange={(e) => setClientVal(e)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Client" />
                    </SelectTrigger>
                    <SelectContent>
                      {client ? (
                        <>
                          <SelectItem value={'new'}>
                            + Add new client
                          </SelectItem>
                          {client.result.map((c: any) => (
                            <SelectItem key={c.id} value={c.clientCode}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </>
                      ) : (
                        <SelectItem value={'new'}>+ Add new client</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  {error.clientVal && (
                    <p className="text-red-500">{error.clientVal}</p>
                  )}
                  {clientVal === 'new' && (
                    <div className="flex flex-col gap-5">
                      <p className="">Client&apos;s details</p>
                      {ClientDetailsForm('Name', 'Enter name', (value) =>
                        setClientName(value),
                      )}
                      {error.clientName && (
                        <p className="text-red-500">{error.clientName}</p>
                      )}
                      {ClientDetailsForm('Address', 'Enter address', (value) =>
                        setClientAddress(value),
                      )}
                      {error.clientAddress && (
                        <p className="text-red-500">{error.clientAddress}</p>
                      )}
                      {ClientDetailsForm('Phone', 'Enter phone', (value) =>
                        setClientPhone(value),
                      )}
                      {error.clientPhone && (
                        <p className="text-red-500">{error.clientPhone}</p>
                      )}
                      {ClientDetailsForm('Email', 'Enter email', (value) =>
                        setClientEmail(value),
                      )}
                      {error.clientEmail && (
                        <p className="text-red-500">{error.clientEmail}</p>
                      )}
                      <div className="flex flex-col gap-2">
                        <Label>Payment Method</Label>
                        <Select onValueChange={(e) => setClientPay(e)}>
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
                    {error.date && <p className="text-red-500">{error.date}</p>}
                  </div>
                  <div className="md:w-1/4 w-full flex flex-col gap-3">
                    <Label>Status</Label>
                    <Select onValueChange={(e) => setInvoiceStatus(e)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="PAID">PAID</SelectItem>
                        <SelectItem value="UNPAID">UNPAID</SelectItem>
                        <SelectItem value="OVERDUE">OVERDUE</SelectItem>
                      </SelectContent>
                    </Select>
                    {error.invoiceStatus && (
                      <p className="text-red-500">{error.invoiceStatus}</p>
                    )}
                  </div>
                  <div className="md:w-auto w-full flex flex-col gap-3">
                    <Label>Recurring Date</Label>
                    <Select onValueChange={(e) => setRecurringDate(e)}>
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
                    {error.reccuringDate && (
                      <p className="text-red-500">{error.reccuringDate}</p>
                    )}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <p>Invoice Product</p>
                  <div className="bg-slate-200 h-0.5 w-full"></div>
                </div>
                {invoiceProducts.map((e: any, i: number) => (
                  <React.Fragment key={i}>
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
                                total:
                                  updatedProducts[i].quantity ||
                                  0 *
                                    (selectedProduct
                                      ? selectedProduct.price
                                      : 0), // Update priceTotal as well

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
                              updatedProducts[i].total =
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
                              updatedProducts[i].total =
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
                            value={e.total}
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
                  </React.Fragment>
                ))}
                {error.invoiceProducts && (
                  <p className="text-red-500">{error.invoiceProducts}</p>
                )}
                <div className="w-auto">
                  <p
                    onClick={addNewProduct}
                    className="w-24 underline text-green-700 cursor-pointer"
                  >
                    + Add item
                  </p>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <p>Payment Method</p>
                  <div className="bg-slate-200 h-0.5 w-full"></div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <Select onValueChange={(e) => setPaymentVal(e)}>
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
                  clientName={clientName}
                  clientAddress={clientAddress}
                  clientPhone={clientPhone}
                  clientEmail={clientEmail}
                  totalAmount={totalAmount}
                  bankAccount={details?.result[0].bankAccount}
                  accountNumber={details?.result[0].accountNumber}
                  products={invoiceProducts}
                  accountName={details?.result[0].accountName}
                  paymentMethod={clientPay}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
