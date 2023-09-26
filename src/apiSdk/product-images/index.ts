import axios from 'axios';
import queryString from 'query-string';
import { ProductImageInterface, ProductImageGetQueryInterface } from 'interfaces/product-image';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProductImages = async (
  query?: ProductImageGetQueryInterface,
): Promise<PaginatedInterface<ProductImageInterface>> => {
  const response = await axios.get('/api/product-images', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createProductImage = async (productImage: ProductImageInterface) => {
  const response = await axios.post('/api/product-images', productImage);
  return response.data;
};

export const updateProductImageById = async (id: string, productImage: ProductImageInterface) => {
  const response = await axios.put(`/api/product-images/${id}`, productImage);
  return response.data;
};

export const getProductImageById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/product-images/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProductImageById = async (id: string) => {
  const response = await axios.delete(`/api/product-images/${id}`);
  return response.data;
};
