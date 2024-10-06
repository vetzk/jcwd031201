export type ProductType = {
  name: string;
  product?: { name: string };
  quantity: number;
  priceUnit: number;
  total: number;
};

export type ProductDetails = {
  id: number;
  name: string;
  price: number;
  productCode: string;
};
