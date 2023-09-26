import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface ProductDetailsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  product_summary?: string;
  product_id?: string;

  product?: ProductInterface;
  _count?: {};
}

export interface ProductDetailsGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_summary?: string;
  product_id?: string;
}
