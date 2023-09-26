import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface BranchInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  address?: string;
  company_id?: string;
  brnach_head?: string;

  company?: CompanyInterface;
  _count?: {};
}

export interface BranchGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  company_id?: string;
  brnach_head?: string;
}
