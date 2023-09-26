import { ProductDetailsInterface } from 'interfaces/product-details';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  product_description?: string;
  product_manager?: string;
  product_manager_mobile?: string;
  product_details?: ProductDetailsInterface[];

  _count?: {
    product_details?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_description?: string;
  product_manager?: string;
  product_manager_mobile?: string;
}
