import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  product_description: yup.string().nullable(),
  product_manager: yup.string().nullable(),
  product_manager_mobile: yup.string().nullable(),
});
