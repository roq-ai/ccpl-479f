import { GetQueryInterface } from 'interfaces';

export interface ProductRatingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  rating_comment?: string;
  rating_given_by?: string;
  rating_given_email?: string;

  _count?: {};
}

export interface ProductRatingGetQueryInterface extends GetQueryInterface {
  id?: string;
  rating_comment?: string;
  rating_given_by?: string;
  rating_given_email?: string;
}
