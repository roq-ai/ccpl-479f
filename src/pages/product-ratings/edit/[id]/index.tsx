import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getProductRatingById, updateProductRatingById } from 'apiSdk/product-ratings';
import { productRatingValidationSchema } from 'validationSchema/product-ratings';
import { ProductRatingInterface } from 'interfaces/product-rating';

function ProductRatingEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<ProductRatingInterface>(
    () => (id ? `/product-ratings/${id}` : null),
    () => getProductRatingById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: ProductRatingInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateProductRatingById(id, values);
      mutate(updated);
      resetForm();
      router.push('/product-ratings');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<ProductRatingInterface>({
    initialValues: data,
    validationSchema: productRatingValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Product Ratings',
              link: '/product-ratings',
            },
            {
              label: 'Update Product Rating',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Product Rating
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.rating_comment}
            label={'Rating Comment'}
            props={{
              name: 'rating_comment',
              placeholder: 'Rating Comment',
              value: formik.values?.rating_comment,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.rating_given_by}
            label={'Rating Given By'}
            props={{
              name: 'rating_given_by',
              placeholder: 'Rating Given By',
              value: formik.values?.rating_given_by,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.rating_given_email}
            label={'Rating Given Email'}
            props={{
              name: 'rating_given_email',
              placeholder: 'Rating Given Email',
              value: formik.values?.rating_given_email,
              onChange: formik.handleChange,
            }}
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/product-ratings')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'product_rating',
    operation: AccessOperationEnum.UPDATE,
  }),
)(ProductRatingEditPage);
