import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CREATE_REVIEW_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';

const ReviewFormSchema = Yup.object().shape({
  username: Yup.string().required('Repository owner\'s username is required'),
  repositoryName: Yup.string().required('Repository\'s name is required'),
  rating: Yup.number().required('Rating is required').min(0, 'Rating must be at least 0').max(100, 'Rating must be at most 100'),
  review: Yup.string(),
});

const ReviewForm = ({ id }) => {
  const [createReview] = useMutation(CREATE_REVIEW_MUTATION);
  const navigate = useNavigate();
  return (
     <Formik
      initialValues={{ username: '', repositoryName: '', rating: '', review: '' }}
      validationSchema={ReviewFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        const { username, repositoryName, rating, review } = values;
        createReview({
          variables: {
            review: {
              ownerName: username,
              repositoryName: repositoryName,
              rating: parseInt(rating, 10),
              text: review
            }
          }
        }).then(() => {
          setSubmitting(false);
          navigate(`/repository/${id}`)
        }).catch(error => {
          console.error(error);
          setSubmitting(false);
        });
      }}
    >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="username" placeholder="GitHub Username" />
        <ErrorMessage name="username" component="div" />

        <Field type="text" name="repositoryName" placeholder="Repository Name" />
        <ErrorMessage name="repositoryName" component="div" />

        <Field type="number" name="rating" placeholder="Rating (0-100)" />
        <ErrorMessage name="rating" component="div" />

        <Field type="text" name="review" placeholder="Review" as="textarea" />
        <ErrorMessage name="review" component="div" />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
)};

export default ReviewForm;
