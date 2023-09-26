import * as yup from 'yup';

export const testimonialValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  client_image: yup.string().nullable(),
  client_name: yup.string().nullable(),
  client_profession: yup.string().nullable(),
});
