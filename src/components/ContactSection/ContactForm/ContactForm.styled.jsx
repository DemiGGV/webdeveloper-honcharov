import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormContainer = styled(Form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LabelDiv = styled.label`
  position: relative;
`;

export const FieldInput = styled(Field)`
  display: block;
  width: 100%;
  padding: 10px 18px;
  resize: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;

  color: var(--white-color);
  background-color: var(--second-bg-color);
  background-clip: padding-box;

  border: none;

  transition: box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: var(--white-color);
    opacity: 0.4;
  }

  &:focus {
    color: var(--white-color);
    background-color: var(--second-bg-color);
    outline: 0;
    box-shadow: var(--small-glow-shadow);
  }

  &:disabled {
    background-color: var(--gray-color);
    opacity: 1;
  }

  &:hover {
    box-shadow: var(--small-glow-shadow);
  }

  @media screen and (min-width: 768px) {
    padding: 12px 16px;
  }
`;

export const ErrorField = styled.div`
  padding: 0 10px;

  position: absolute;
  top: 10px;
  right: 6px;

  color: var(--warning-color);
  border-radius: 15px;
`;

export const SubmitButton = styled.button`
  height: 48px;
  padding: 0 25px;
  border-radius: 50px;
  max-width: fit-content;
  outline: none;
  border: none;

  display: inline;

  color: var(--main-bg-color);
  background: #d3e97a;

  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  text-transform: uppercase;

  transition: all 0.2s ease;
  cursor: pointer;


  &:disabled{
    background-color: var(--second-bg-color);
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    box-shadow: var(--small-glow-shadow);
  }
`;
