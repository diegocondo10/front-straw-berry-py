import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';

const Select = ({ label = 'label', options = [], name, rules, ...props }) => {
  const { control, errors } = useFormContext();
  console.log(errors[name]);
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={null}
        render={({ onChange, value }) => (
          <Form.Control
            as="select"
            className="text-center"
            isInvalid={!!errors[name]}
            value={JSON.stringify(value)}
            onChange={({ target }) => {
              const { value } = target;
              onChange(JSON.parse(value));
            }}
            {...props}
          >
            <option value={null}>----SELECCIONE----</option>
            {options.map((opt, index) => (
              <option key={index} value={JSON.stringify(opt.value)}>
                {opt.label}
              </option>
            ))}
          </Form.Control>
        )}
      />

      <Form.Control.Feedback type="invalid">
        <ErrorMessage errors={errors} name={name}>
          {({ message }) => message}
        </ErrorMessage>
      </Form.Control.Feedback>
    </Form.Group>
  );
};

//inputs.propTypes = {};

export default Select;
