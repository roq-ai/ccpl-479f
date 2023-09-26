import * as yup from 'yup';

export const contactFormValidationSchema = yup.object().shape({
  email_id: yup.string().nullable(),
  mobile_number: yup.string().nullable(),
  name: yup.string().nullable(),
  company_name: yup.string().nullable(),
  contact_reason: yup.string().nullable(),
});
