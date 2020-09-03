import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import classnames from 'classnames';

const CustomTextInput = ({ label, name, rules = {}, type = 'text' }) => {
  const { errors, control } = useFormContext();
  return (
    <div className="p-field form-group">
      <Form.Label>{label}</Form.Label>

      <Controller
        name={name}
        rules={rules}
        defaultValue=""
        render={({ onChange, value }) => (
          <InputText
            value={value}
            onChange={({ currentTarget }) => onChange(currentTarget.value)}
            className={classnames({
              'p-d-block w-100': true,
              'p-invalid': !!errors[name],
            })}
          />
        )}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <small className="p-invalid p-d-block w-100">{message}</small>
        )}
      />
    </div>
  );
};

export default CustomTextInput;
