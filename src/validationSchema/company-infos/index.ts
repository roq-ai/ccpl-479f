import * as yup from 'yup';

export const companyInfoValidationSchema = yup.object().shape({
  company_history: yup.string().nullable(),
});
