import * as yup from 'yup';

export const productImageValidationSchema = yup.object().shape({
  image_description: yup.string().nullable(),
  image_path: yup.string().nullable(),
});
