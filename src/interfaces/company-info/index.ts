import { GetQueryInterface } from 'interfaces';

export interface CompanyInfoInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  company_history?: string;

  _count?: {};
}

export interface CompanyInfoGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_history?: string;
}
