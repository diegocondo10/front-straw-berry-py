import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const CustomTextInput = ({ label, name, rules = {}, type = 'text' }) => {
  const { register, errors } = useFormContext();

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        defaultValue=""
        isInvalid={!!errors[name]}
        ref={register({ ...rules })}
      />
      <Form.Control.Feedback type="invalid">
        <ErrorMessage errors={errors} name={name}>
          {({ message }) => message}
        </ErrorMessage>
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default CustomTextInput;
