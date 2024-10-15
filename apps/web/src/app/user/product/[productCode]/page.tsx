'use client';
import Sidebar from '@/components/Sidebar';
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
import { Textarea } from '@/components/ui/textarea';
import apiCall from '@/helper/apiCall';
import useCategory from '@/helper/useCategory';
import withAuth from '@/hoc/authGuard';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProductDetailProps {
  params: {
    productCode: string;
  };
}

const ProductDetail: React.FunctionComponent<IProductDetailProps> = ({
  params,
}) => {
  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [categoryList, setCategoryList] = React.useState<string[]>([]);
  const [categoryName, setCategoryName] = React.useState<string>('');
  const [price, setPrice] = React.useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<{ [key: string]: string }>({
    name: '',
    price: '',
    categoryName: '',
  });
  const router = useRouter();
  const token = localStorage.getItem('token') || '';

  const { data: category } = useCategory();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product-detail'],
    queryFn: async () => {
      const { data } = await apiCall.get(`/api/product/${params.productCode}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });

  const formValidation = () => {
    setError({
      name: '',
      price: '',
      categoryName: '',
    });

    let isValid = true;

    if (!name) {
      setError((prev) => ({ ...prev, name: 'Name is required' }));
      isValid = false;
    }
    if (!price) {
      setError((prev) => ({ ...prev, price: 'Price is required' }));
      isValid = false;
    }
    if (!categoryName) {
      setError((prev) => ({
        ...prev,
        categoryName: 'Please select a category',
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

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.patch(
        `/api/product/${params.productCode}`,
        { name, price, description, categoryName },
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
      toast.success('Update Product Success', { position: 'bottom-center' });
      setTimeout(() => {
        router.replace('/user/product');
      }, 5000);
    },
    onError: (error: any) => {
      console.log(error);
      toast.error('Failed to Update Product', { position: 'bottom-center' });
    },
  });

  const handleUpdateProduct = () => {
    mutation.mutate();
  };

  React.useEffect(() => {
    if (data && category) {
      console.log(data);

      setCategoryList(category.result);
      setName(data.result.name);
      setDescription(data.result.description);
      setPrice(data.result.price);
      setCategoryName(data.result.category.categoryName);

      console.log(categoryList);
    }
  }, [data, category, categoryList]);
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row mt-28 mb-10 mx-5 md:mx-10 rounded-xl border-slate-500 border border-solid">
        <Sidebar />
        <div className="flex-1">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-5 md:flex-row md:items-center md:justify-between border-b border-b-black border-b-solid p-5">
              <div className="w-full flex justify-center md:justify-start items-center gap-5">
                <p className="text-2xl font-bold md:text-start text-center">
                  Product Detail
                </p>
              </div>
              <div className="flex md:justify-start justify-center items-center gap-5">
                <Button onClick={() => router.push('/user/product')}>
                  Back to Product List
                </Button>
                <Button
                  onClick={handleClickButton}
                  className="bg-green-400 text-white hover:bg-green-400"
                >
                  Update Product
                </Button>
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to update your product?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Make sure the informations are correct.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-red-500">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={handleUpdateProduct}>
                        Update Product
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 p-5">
              <div className="w-full flex flex-col gap-2">
                <Label>Product Name</Label>
                <Input
                  type="text"
                  className="md:w-1/2 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Label>Product Description</Label>
                <Textarea
                  className="md:w-1/2 w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Label>Product Price</Label>
                <Input
                  type="number"
                  className="md:w-1/2 w-full"
                  value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Label>Category</Label>
                <Select
                  value={categoryName}
                  onValueChange={(e) => setCategoryName(e)}
                >
                  <SelectTrigger className="md:w-1/2 w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryList &&
                      categoryList.map((e: any, i: number) => (
                        <React.Fragment key={i}>
                          <SelectItem value={e.categoryName}>
                            {e.categoryName}
                          </SelectItem>
                        </React.Fragment>
                      ))}
                  </SelectContent>
                </Select>
                {error.categoryName && (
                  <p className="text-red-500">{error.categoryName}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ProductDetail);
