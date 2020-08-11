import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';
const CustomDropDown = ({ label, name, rules, options = [] }) => {
  const { control } = useFormContext();
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        render={({ onChange, value }) => (
          <Form.Control
            as="select"
            value={JSON.stringify(value)}
            onChange={({ target }) => onChange(JSON.parse(target.value))}
          >
            <option value={JSON.stringify('')}>-----SELECCIONE----</option>
          </Form.Control>
        )}
      />
    </Form.Group>
  );
};

export default CustomDropDown;
