import {
  ErrorField,
  FieldInput,
  FormContainer,
  LabelDiv,
  SubmitButton,
} from './ContactForm.styled';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { email_send } from '../../Utils/Email_service/email_service';

export const ContactForm = () => {

  const handleSubmit = (value, { resetForm }) => {
    const email = {
      from_name: value.name,
      from_email: value.email,
      message: value.message
    }
    email_send(email);
    resetForm();
  };

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short! (min - 5)')
      .max(30, 'Too Long! (max - 30)')
      .required('Required'),
    email: Yup.string()
      .email()
      .min(7, 'Too Short! (min - 7)')
      .max(30, 'Too Long! (max - 30)')
      .required('Required'),
    message: Yup.string()
      .min(3, 'Too Short! (min - 3)')
      .max(300, 'Too Long! (max - 300)')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <FormContainer>
          <LabelDiv>
            <FieldInput type="text" name="name" placeholder="Enter your Name" />
            <ErrorMessage component={ErrorField} name="name" />
          </LabelDiv>
          <LabelDiv>
            <FieldInput
              type="email"
              name="email"
              placeholder="Enter your Email"
            />
            <ErrorMessage component={ErrorField} name="email" />
          </LabelDiv>
          <LabelDiv>
            <FieldInput
              as='textarea'
              rows="5"
              name="message"              
            />
            <ErrorMessage component={ErrorField} name="message" />
          </LabelDiv>
          <SubmitButton type="submit" disabled={!(isValid && dirty)}>
            Submit
          </SubmitButton>
        </FormContainer>
      )}
    </Formik>
  );
};
