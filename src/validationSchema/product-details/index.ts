import * as yup from 'yup';

export const productDetailsValidationSchema = yup.object().shape({
  product_summary: yup.string().nullable(),
  product_id: yup.string().nullable(),
});
