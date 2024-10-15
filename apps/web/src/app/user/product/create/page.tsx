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
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { UserContext } from '@/contexts/UserContext';
import apiCall from '@/helper/apiCall';
import withAuth from '@/hoc/authGuard';
import { SelectValue } from '@radix-ui/react-select';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ICreateProductProps {}

const CreateProduct: React.FunctionComponent<ICreateProductProps> = (props) => {
  const { user } = React.useContext(UserContext);
  const [name, setName] = React.useState<string>('');
  const [price, setPrice] = React.useState<number>(0);
  const [description, setDescription] = React.useState<string>('');
  const [categoryName, setCategoryName] = React.useState<string>('');
  const [category, setCategory] = React.useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<{ [key: string]: string }>({
    name: '',
    price: '',
    categoryName: '',
  });
  const router = useRouter();
  const token = localStorage.getItem('token');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const { data } = await apiCall.get('/api/product/category');
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await apiCall.post(
        '/api/product',
        {
          name,
          price,
          description,
          categoryName,
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
      setIsDialogOpen(false);
      toast.success('Create Product Success', {
        onClose: () => router.replace('/user/product'),
        position: 'bottom-center',
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error('Failed to create product', { position: 'bottom-center' });
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

  const handleCreateProduct = () => {
    mutation.mutate();
  };

  React.useEffect(() => {
    if (data) {
      setCategory(data.result);
    }
    console.log(categoryName);
  }, [data, category, categoryName]);

  if (!user?.isVerified) {
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <p className="text-2xl">
          Please Verify first before you can access our features
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row mt-28 mb-10 mx-5 md:mx-10 rounded-xl border-slate-500 border border-solid">
        <Sidebar />
        <div className="flex-1">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-5 md:flex-row md:items-center md:justify-between border-b border-b-black border-b-solid p-5">
              <div className="w-full flex justify-center md:justify-start items-center gap-5">
                <p className="text-2xl font-bold md:text-start text-center">
                  New Product
                </p>
              </div>
              <div className="w-full flex justify-center items-center md:w-auto md:justify-start">
                <Button
                  onClick={handleClickButton}
                  className="bg-green-400 text-white hover:bg-green-400"
                >
                  Create Product
                </Button>
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to create product?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Make sure the informations are correct
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-red-500">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={handleCreateProduct}>
                        Create Product
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
                {error.name && <p className="text-red-500">{error.name}</p>}
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
                {error.price && <p className="text-red-500">{error.price}</p>}
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
                    {category &&
                      category.map((e: any, i) => (
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

export default withAuth(CreateProduct);
