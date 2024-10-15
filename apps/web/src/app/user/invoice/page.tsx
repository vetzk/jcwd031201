'use client';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import 'react-toastify/dist/ReactToastify.css';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import apiCall from '@/helper/apiCall';
import withAuth from '@/hoc/authGuard';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Alert from '@/components/Alert';

interface IInvoiceProps {}

type InvoiceType = {
  invoiceCode: string;
};

const tableTitle = ['Invoice Code', 'Client', 'Due Date', 'Status', 'Amount'];

const Invoice: React.FunctionComponent<IInvoiceProps> = (props) => {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get('search') || '';
  const [invoices, setInvoices] = React.useState<InvoiceType[]>([]);
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [startDateSearch, setStartDateSearch] = React.useState<Date | null>(
    null,
  );
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [endDateSearch, setEndDateSearch] = React.useState<Date | null>(null);
  const [search, setSearch] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(10);
  const [searchInput, setSearchInput] = React.useState<string>(searchParam);
  const [selectedInvoices, setSelectedInvoices] = React.useState<string[]>([]);
  const [allchecked, setAllChecked] = React.useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [invoiceStatus, setInvoiceStatus] = React.useState<string>('');
  const [invoiceStatusValue, setInvoiceStatusValue] =
    React.useState<string>('');
  const token = localStorage.getItem('token');

  const mutation = useMutation({
    mutationFn: async () => {
      if (selectedInvoices.length === 0) {
        toast('No invoice selected');
        return;
      }
      const { data } = await apiCall.patch(
        '/api/invoice/delete',
        {
          invoiceCodes: selectedInvoices,
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
      toast('Delete invoice success');
      console.log(data);
      setTimeout(() => {
        refetch();
      }, 5000);
    },
    onError: (error: any) => {
      toast('Failed to delete invoice');
      console.log(error);
    },
  });

  const handleDeleteInvoice = () => {
    mutation.mutate();
  };

  const handleClickButton = () => {
    setIsDialogOpen(true);
  };

  const handleSelectAll = () => {
    if (allchecked) {
      const invoiceCodesOnCurrentPage = data?.result.map(
        (e: any) => e.invoiceCode,
      );

      setSelectedInvoices((prevSelectedInvoices) =>
        prevSelectedInvoices.filter(
          (code) => !invoiceCodesOnCurrentPage.includes(code),
        ),
      );
    } else {
      const invoiceCodesOnCurrentPage = data?.result.map(
        (e: any) => e.invoiceCode,
      );

      setSelectedInvoices((prevSelectedInvoices) => [
        ...prevSelectedInvoices,
        ...invoiceCodesOnCurrentPage.filter(
          (code: any) => !prevSelectedInvoices.includes(code),
        ),
      ]);
    }

    setAllChecked(!allchecked);
  };

  const handleSelectInvoice = (invoiceCode: string) => {
    let updatedSelectedInvoice = [...selectedInvoices];
    if (updatedSelectedInvoice.includes(invoiceCode)) {
      updatedSelectedInvoice = updatedSelectedInvoice.filter(
        (code) => code !== invoiceCode,
      );
    } else {
      updatedSelectedInvoice.push(invoiceCode);
    }

    setSelectedInvoices(updatedSelectedInvoice);
    const invoiceCodesOnCurrentPage = data?.result.map(
      (e: any) => e.invoiceCode,
    );

    setAllChecked(
      invoiceCodesOnCurrentPage.every((code: any) =>
        updatedSelectedInvoice.includes(code),
      ),
    );
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [
      'invoice',
      search,
      startDate,
      endDate,
      page,
      limit,
      invoiceStatus,
    ],
    queryFn: async () => {
      const { data } = await apiCall.get('/api/invoice', {
        params: {
          page,
          limit,
          startDate: startDateSearch,
          endDate: endDateSearch,
          search: searchInput,
          invoiceStatus: invoiceStatusValue,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });

  const handleReset = () => {
    setInvoiceStatusValue('');
    setStartDateSearch(null);
    setEndDateSearch(null);
    setSearchInput('');
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set('search', searchInput);
    params.set('status', invoiceStatusValue);
    params.set(
      'startDate',
      String(startDateSearch?.toLocaleDateString('en-GB')),
    );
    params.set('endDate', String(endDateSearch?.toLocaleDateString('en-GB')));
    router.push(`/user/invoice?${params.toString()}`);
    refetch();
  };

  const handleDownloadPDF = useMutation({
    mutationFn: async () => {
      if (!selectedInvoices.length) {
        toast('No invoice selected for download');
        return;
      }

      const { data } = await apiCall.post(
        '/api/invoice/download',
        {
          invoiceCodes: selectedInvoices,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/zip',
          },
          responseType: 'arraybuffer', // Important for downloading files
        },
      );

      const blob = new Blob([data], { type: 'application/zip' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'selected_invoices.zip';
      link.click();
    },
    onSuccess: (data) => {
      toast.success('Download invoice success', { position: 'bottom-center' });
      console.log(data);
    },
    onError: (error) => {
      toast.error('Download invoice error', { position: 'bottom-center' });
      console.log(error);
    },
  });

  const handleDownloadInvoice = () => {
    handleDownloadPDF.mutate();
  };

  React.useEffect(() => {
    if (data) {
      setInvoices(data.result);
    }
    const invoiceCodesOnCurrentPage = invoices.map((e: any) => e.invoiceCode);
    setAllChecked(
      invoiceCodesOnCurrentPage.every((code: any) =>
        selectedInvoices.includes(code),
      ),
    );
  }, [data, invoices, selectedInvoices]);

  const router = useRouter();

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
      <div className="flex flex-col md:flex-row mt-28 mb-10 mx-5 md:mx-10 rounded-xl border-slate-500 border border-solid">
        <Sidebar />
        <div className="flex-1">
          <div className="w-full flex flex-col">
            {/* Search Section */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-b border-b-black border-b-solid p-3 md:p-5 gap-4">
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Search"
                  className="w-full md:w-1/2"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <div className="w-full md:w-1/2 flex items-center gap-2 md:gap-5">
                  <div className="z-20">
                    <DatePicker
                      className="border-slate-200 shadow-sm border border-solid rounded-md md:w-auto w-full p-2"
                      placeholderText="From"
                      selected={startDateSearch}
                      onChange={(date) => setStartDateSearch(date)}
                    />
                  </div>
                  <div className="z-20">
                    <DatePicker
                      className="border-slate-200 shadow-sm border border-solid rounded-md p-2 md:w-auto w-full"
                      placeholderText="To"
                      selected={endDateSearch}
                      onChange={(date) => setEndDateSearch(date)}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <Select
                    value={invoiceStatusValue}
                    onValueChange={(e) => setInvoiceStatusValue(e)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PAID">PAID</SelectItem>
                      <SelectItem value="UNPAID">UNPAID</SelectItem>
                      <SelectItem value="OVERDUE">OVERDUE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2 md:gap-5">
                <Button onClick={handleReset}>Reset</Button>
                <Button onClick={handleSearch}>Search</Button>
              </div>
            </div>

            {/* Header Section */}
            <div className="w-full flex justify-between md:items-baseline items-center border-b border-b-black border-b-solid p-3 md:p-5">
              <p className="text-lg md:text-2xl font-bold">Invoice</p>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
                <Button
                  disabled={selectedInvoices.length === 0}
                  onClick={handleDownloadInvoice}
                  className="bg-white border-slate-300 border border-solid text-black hover:bg-transparent md:w-auto w-36"
                >
                  Download as PDF
                </Button>
                <Button
                  onClick={() => router.push('/user/invoice/create')}
                  className="bg-green-400 text-white hover:bg-green-400 md:w-auto w-36"
                >
                  +Create Invoice
                </Button>
                <Button
                  disabled={selectedInvoices.length === 0}
                  onClick={handleClickButton}
                  className="bg-red-500 hover:bg-red-500 md:w-auto w-36"
                >
                  Delete Invoice
                </Button>
              </div>
            </div>
            <Alert
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
              title={'Are you sure you want to delete your invoice?'}
              description={'This action cannot be reversed'}
              actionText={'Delete Invoice'}
              handleFunc={handleDeleteInvoice}
            />

            {/* Table Section */}
            <div className="w-full p-3 md:p-5 z-10">
              <div className="w-full flex flex-col border-solid border border-slate-300 rounded-lg">
                {/* Wrap the table in a div with horizontal scrolling */}
                <div className="overflow-x-auto">
                  <Table className="min-w-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          <Checkbox
                            checked={allchecked}
                            onCheckedChange={handleSelectAll}
                          />
                        </TableHead>
                        {tableTitle.map((e, i) => (
                          <React.Fragment key={i}>
                            <TableHead>{e}</TableHead>
                          </React.Fragment>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data?.result && data.result.length !== 0 ? (
                        data.result.map((e: any, i: number) => (
                          <TableRow key={i} className="cursor-pointer">
                            <TableCell>
                              <Checkbox
                                checked={selectedInvoices.includes(
                                  e.invoiceCode,
                                )}
                                onCheckedChange={() =>
                                  handleSelectInvoice(e.invoiceCode)
                                }
                              />
                            </TableCell>
                            <TableCell
                              onClick={() =>
                                router.push(`/user/invoice/${e.invoiceCode}`)
                              }
                            >
                              {e.invoiceCode}
                            </TableCell>
                            <TableCell
                              onClick={() =>
                                router.push(`/user/invoice/${e.invoiceCode}`)
                              }
                            >
                              {e.client.name}
                            </TableCell>
                            <TableCell
                              onClick={() =>
                                router.push(`/user/invoice/${e.invoiceCode}`)
                              }
                            >
                              {new Date(e.invoiceDate).toLocaleDateString(
                                'en-GB',
                                {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                },
                              )}
                            </TableCell>
                            <TableCell
                              className={`${
                                e.invoiceStatus === 'PAID'
                                  ? 'text-green-500 bg-green-200'
                                  : e.invoiceStatus === 'UNPAID'
                                    ? 'text-orange-500 bg-orange-200'
                                    : 'text-red-500 bg-red-200'
                              } font-bold`}
                              onClick={() =>
                                router.push(`/user/invoice/${e.invoiceCode}`)
                              }
                            >
                              {e.invoiceStatus}
                            </TableCell>
                            <TableCell>
                              {new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                              }).format(e.totalAmount)}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center">
                            You don&apos;t have any invoice
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={2}>
                          Page {page} of{' '}
                          {data && Math.ceil(data.total / limit) !== 0
                            ? Math.ceil(data.total / limit)
                            : 1}
                        </TableCell>
                        <TableCell className="flex items-center gap-2">
                          <Button
                            onClick={() =>
                              setPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={page === 1}
                          >
                            {'<'}
                          </Button>
                          <Button
                            onClick={() =>
                              setPage((prev) => Math.max(prev + 1))
                            }
                            disabled={
                              page === Math.ceil(data?.total / limit) ||
                              Math.ceil(data?.total / limit) === 0
                            }
                          >
                            {'>'}
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Invoice);
