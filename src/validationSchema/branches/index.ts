import * as yup from 'yup';

export const branchValidationSchema = yup.object().shape({
  address: yup.string().nullable(),
  brnach_head: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
