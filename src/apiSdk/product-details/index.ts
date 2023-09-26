import axios from 'axios';
import queryString from 'query-string';
import { ProductDetailsInterface, ProductDetailsGetQueryInterface } from 'interfaces/product-details';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProductDetails = async (
  query?: ProductDetailsGetQueryInterface,
): Promise<PaginatedInterface<ProductDetailsInterface>> => {
  const response = await axios.get('/api/product-details', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createProductDetails = async (productDetails: ProductDetailsInterface) => {
  const response = await axios.post('/api/product-details', productDetails);
  return response.data;
};

export const updateProductDetailsById = async (id: string, productDetails: ProductDetailsInterface) => {
  const response = await axios.put(`/api/product-details/${id}`, productDetails);
  return response.data;
};

export const getProductDetailsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/product-details/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProductDetailsById = async (id: string) => {
  const response = await axios.delete(`/api/product-details/${id}`);
  return response.data;
};
