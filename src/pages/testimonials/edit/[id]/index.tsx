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
import { getTestimonialById, updateTestimonialById } from 'apiSdk/testimonials';
import { testimonialValidationSchema } from 'validationSchema/testimonials';
import { TestimonialInterface } from 'interfaces/testimonial';

function TestimonialEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<TestimonialInterface>(
    () => (id ? `/testimonials/${id}` : null),
    () => getTestimonialById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: TestimonialInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateTestimonialById(id, values);
      mutate(updated);
      resetForm();
      router.push('/testimonials');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<TestimonialInterface>({
    initialValues: data,
    validationSchema: testimonialValidationSchema,
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
              label: 'Testimonials',
              link: '/testimonials',
            },
            {
              label: 'Update Testimonial',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Testimonial
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Rating"
            formControlProps={{
              id: 'rating',
              isInvalid: !!formik.errors?.rating,
            }}
            name="rating"
            error={formik.errors?.rating}
            value={formik.values?.rating}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('rating', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.client_image}
            label={'Client Image'}
            props={{
              name: 'client_image',
              placeholder: 'Client Image',
              value: formik.values?.client_image,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.client_name}
            label={'Client Name'}
            props={{
              name: 'client_name',
              placeholder: 'Client Name',
              value: formik.values?.client_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.client_profession}
            label={'Client Profession'}
            props={{
              name: 'client_profession',
              placeholder: 'Client Profession',
              value: formik.values?.client_profession,
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
              onClick={() => router.push('/testimonials')}
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
    entity: 'testimonial',
    operation: AccessOperationEnum.UPDATE,
  }),
)(TestimonialEditPage);
