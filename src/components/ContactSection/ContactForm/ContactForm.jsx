import {
  ErrorField,
  FieldInput,
  FormContainer,
  LabelDiv,
  SubmitButton
} from './ContactForm.styled';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

export const ContactForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    const { name, email, subject, message } = value;
    console.log(
      'name:',
      name,
      'email:',
      email,
      'subject:',
      subject,
      'message:',
      message,
    );
    resetForm();
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short! (min - 5)')
      .max(30, 'Too Long! (max - 30)')
      .required('Required'),
    email: Yup.string()
      .email()
      .min(7, 'Too Short! (min - 7)')
      .max(30, 'Too Long! (max - 30)')
      .required('Required'),
    subject: Yup.string()
      .min(3, 'Too Short! (min - 3)')
      .max(30, 'Too Long! (max - 30)')
      .required('Required'),
    message: Yup.string()
      .min(3, 'Too Short! (min - 3)')
      .max(300, 'Too Long! (min - 300)'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <LabelDiv>
          <FieldInput
            type="text"
            name="name"
            placeholder="Input your Name"
            autoComplete="off"
          />
          <ErrorMessage component={ErrorField} name="name" />
        </LabelDiv>
        <LabelDiv>
          <FieldInput
            type="email"
            name="email"
            placeholder="Input your Email"
            autoComplete="off"
          />
          <ErrorMessage component={ErrorField} name="email" />
        </LabelDiv>
        <LabelDiv>
          <FieldInput
            type="text"
            name="subject"
            placeholder="Input your Subject"
            autoComplete="off"
          />
          <ErrorMessage component={ErrorField} name="subject" />
        </LabelDiv>
        <LabelDiv>
          <FieldInput
            as="textarea"
            name="message"
            placeholder="Input your Message"
            rows="5"
            autoComplete="off"
            resize= 'none'
          />
          <ErrorMessage component={ErrorField} name="message" />
        </LabelDiv>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </Formik>
  );
};
