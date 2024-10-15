'use client';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
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
import { ProductType } from './type';
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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface IProductProps {}

const Product: React.FunctionComponent<IProductProps> = (props) => {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get('search') || '';
  const [product, setProduct] = React.useState<ProductType[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(10);
  const [search, setSearch] = React.useState<string>('');
  const [searchInput, setSearchInput] = React.useState<string>(searchParam);
  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([]);
  const [allchecked, setAllChecked] = React.useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const token = localStorage.getItem('token');

  const mutation = useMutation({
    mutationFn: async () => {
      if (selectedProducts.length === 0) {
        toast('No product selected');
        return;
      }

      const { data } = await apiCall.patch(
        '/api/product/delete',
        {
          productCodes: selectedProducts,
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
      setSelectedProducts([]);
      toast.success('Delete Product Success', { position: 'bottom-center' });
      setTimeout(() => {
        router.replace('/user/product');
      }, 5000);
    },
    onError: (error: any) => {
      toast.error('Delete Product Failed', { position: 'bottom-center' });
      console.log(error);
    },
  });

  const handleDeleteProduct = () => {
    mutation.mutate();
  };

  const handleClickButton = () => {
    setIsDialogOpen(true);
  };

  const handleSelectAll = () => {
    // If `allchecked` is true, it means all products are already selected, so we need to deselect them
    if (allchecked) {
      // Get the product codes for all products on the current page
      const productIdsOnCurrentPage = product.map((e: any) => e.productCode);
      // Update the selected products state by removing the ones that are on the current page
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.filter(
          // Filter out the products on the current page
          (code) => !productIdsOnCurrentPage.includes(code),
        ),
      );
    } else {
      // If `allchecked` is false, it means we need to select all products on the current page
      const productIdsOnCurrentPage = product.map((e: any) => e.productCode);

      // Update the selected products state by adding the products that are on the current page
      setSelectedProducts((prevSelectedProducts) => [
        ...prevSelectedProducts, // Keep the already selected products
        ...productIdsOnCurrentPage.filter(
          (code) => !prevSelectedProducts.includes(code), // Add products that are not already selected
        ),
      ]);
    }

    setAllChecked(!allchecked);
  };

  const handleSelectProduct = (productCode: string) => {
    // Create a copy of the currently selected products
    let updatedSelectedProducts = [...selectedProducts];

    // Check if the clicked product is already in the selected products array
    if (updatedSelectedProducts.includes(productCode)) {
      // If it's already selected, remove it
      updatedSelectedProducts = updatedSelectedProducts.filter(
        (code) => code !== productCode,
      );
    } else {
      // If it's not selected, add it
      updatedSelectedProducts.push(productCode);
    }

    // Update the selected products state with the updated list
    setSelectedProducts(updatedSelectedProducts);
    const productIdsOnCurrentPage = product.map((e: any) => e.productCode);
    // If all products on the current page are selected, set `allchecked` to true, otherwise false
    setAllChecked(
      productIdsOnCurrentPage.every(
        //Checks if every product on the current page is included in the updatedSelectedProducts array.
        (code) => updatedSelectedProducts.includes(code),
      ),
    );
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['product', page, limit, search],
    queryFn: async () => {
      const { data } = await apiCall.get('/api/product', {
        params: {
          page,
          limit,
          search: searchInput,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });

  React.useEffect(() => {
    if (data) {
      setProduct(data.result);
    }

    const productIdsOnCurrentPage = product.map((e: any) => e.productCode);
    setAllChecked(
      //checks every render if the setAllChecked status was true or false
      productIdsOnCurrentPage.every((code) => selectedProducts.includes(code)),
    );
  }, [data, product, limit, selectedProducts]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set('search', searchInput);

    router.push(`/user/product?${params.toString()}`);
    refetch();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <div className="loader mb-4 border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
          <div className="text-4xl font-semibold text-gray-700">
            Loading Product...
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
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-b border-b-black border-b-solid p-3 md:p-5 gap-4">
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full md:w-1/2"
                />
              </div>
              <div className="w-full md:w-auto flex justify-center items-center">
                <Button onClick={handleSearch}>Search</Button>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 md:flex-row md:justify-between md:items-baseline items-center border-b border-b-black border-b-solid p-3 md:p-5">
              <div className="flex flex-col">
                <p className="text-lg text-center md:text-start md:text-2xl font-bold">
                  Product
                </p>
                <p className="text-slate-300">This is your product list</p>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  className="hover:bg-red-500 bg-red-500"
                  disabled={selectedProducts.length === 0}
                  onClick={handleClickButton}
                >
                  Delete Product
                </Button>
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to delete the product?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be reversed
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-red-500 text-white"
                        onClick={handleDeleteProduct}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button
                  onClick={() => router.push('/user/product/create')}
                  className="hover:bg-green-500 bg-green-500"
                >
                  Create Product
                </Button>
              </div>
            </div>
            <div className="w-full p-5">
              <div className="w-full flex flex-col border-solid border border-slate-300 rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <Checkbox
                          checked={allchecked}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Product Code</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Category</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product && product.length !== 0 ? (
                      product.map((e: any, i) => (
                        <React.Fragment key={i}>
                          <TableRow className="cursor-pointer">
                            <TableCell>
                              <Checkbox
                                checked={selectedProducts.includes(
                                  e.productCode,
                                )}
                                onCheckedChange={() =>
                                  handleSelectProduct(e.productCode)
                                }
                              />
                            </TableCell>
                            <TableCell
                              onClick={() =>
                                router.push(`/user/product/${e.productCode}`)
                              }
                            >
                              {e.productCode}
                            </TableCell>
                            <TableCell
                              onClick={() =>
                                router.push(`/user/product/${e.productCode}`)
                              }
                            >
                              {e.name}
                            </TableCell>
                            <TableCell
                              onClick={() =>
                                router.push(`/user/product/${e.productCode}`)
                              }
                            >
                              {new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                              }).format(e.price)}
                            </TableCell>
                            <TableCell
                              onClick={() =>
                                router.push(`/user/product/${e.productCode}`)
                              }
                            >
                              {e.category.categoryName}
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center">
                          You don&apos;t have any products
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={4}>
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
                          onClick={() => setPage((prev) => prev + 1)}
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
  );
};

export default withAuth(Product);
