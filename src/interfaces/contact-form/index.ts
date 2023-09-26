import { GetQueryInterface } from 'interfaces';

export interface ContactFormInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  email_id?: string;
  mobile_number?: string;
  name?: string;
  company_name?: string;
  contact_reason?: string;

  _count?: {};
}

export interface ContactFormGetQueryInterface extends GetQueryInterface {
  id?: string;
  email_id?: string;
  mobile_number?: string;
  name?: string;
  company_name?: string;
  contact_reason?: string;
}
