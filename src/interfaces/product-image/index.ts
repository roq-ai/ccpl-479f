import { GetQueryInterface } from 'interfaces';

export interface ProductImageInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  image_description?: string;
  image_path?: string;

  _count?: {};
}

export interface ProductImageGetQueryInterface extends GetQueryInterface {
  id?: string;
  image_description?: string;
  image_path?: string;
}
