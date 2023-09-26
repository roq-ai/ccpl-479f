import * as yup from 'yup';

export const productRatingValidationSchema = yup.object().shape({
  rating_comment: yup.string().nullable(),
  rating_given_by: yup.string().nullable(),
  rating_given_email: yup.string().nullable(),
});
