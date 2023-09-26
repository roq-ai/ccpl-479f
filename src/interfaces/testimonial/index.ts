import { GetQueryInterface } from 'interfaces';

export interface TestimonialInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  rating: number;
  client_image?: string;
  client_name?: string;
  client_profession?: string;

  _count?: {};
}

export interface TestimonialGetQueryInterface extends GetQueryInterface {
  id?: string;
  client_image?: string;
  client_name?: string;
  client_profession?: string;
}
