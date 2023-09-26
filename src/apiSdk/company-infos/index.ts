import axios from 'axios';
import queryString from 'query-string';
import { CompanyInfoInterface, CompanyInfoGetQueryInterface } from 'interfaces/company-info';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCompanyInfos = async (
  query?: CompanyInfoGetQueryInterface,
): Promise<PaginatedInterface<CompanyInfoInterface>> => {
  const response = await axios.get('/api/company-infos', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCompanyInfo = async (companyInfo: CompanyInfoInterface) => {
  const response = await axios.post('/api/company-infos', companyInfo);
  return response.data;
};

export const updateCompanyInfoById = async (id: string, companyInfo: CompanyInfoInterface) => {
  const response = await axios.put(`/api/company-infos/${id}`, companyInfo);
  return response.data;
};

export const getCompanyInfoById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/company-infos/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCompanyInfoById = async (id: string) => {
  const response = await axios.delete(`/api/company-infos/${id}`);
  return response.data;
};
