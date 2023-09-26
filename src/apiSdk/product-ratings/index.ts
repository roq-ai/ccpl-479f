import axios from 'axios';
import queryString from 'query-string';
import { ProductRatingInterface, ProductRatingGetQueryInterface } from 'interfaces/product-rating';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProductRatings = async (
  query?: ProductRatingGetQueryInterface,
): Promise<PaginatedInterface<ProductRatingInterface>> => {
  const response = await axios.get('/api/product-ratings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createProductRating = async (productRating: ProductRatingInterface) => {
  const response = await axios.post('/api/product-ratings', productRating);
  return response.data;
};

export const updateProductRatingById = async (id: string, productRating: ProductRatingInterface) => {
  const response = await axios.put(`/api/product-ratings/${id}`, productRating);
  return response.data;
};

export const getProductRatingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/product-ratings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProductRatingById = async (id: string) => {
  const response = await axios.delete(`/api/product-ratings/${id}`);
  return response.data;
};
