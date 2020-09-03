import classnames from 'classnames';
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';
import CustomErrorMessage from './CustomErrorMessage';
import { BaseFormFieldProps } from './types';

const CustomDropdown = (props?: CustomSelectProps) => {
  const {
    label,
    rules,
    name,
    onChange: onChangeFn,
    placeholder,
    className,
    ...rest
  } = props;

  const { control, errors } = useFormContext();

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={null}
        render={({ onChange, value }) => (
          <Dropdown
            value={value}
            onChange={({ value }) => {
              onChange(value);
              onChangeFn && onChangeFn(value);
            }}
            placeholder={placeholder || 'Seleccione'}
            className={classnames({
              [className]: true,
              'w-100': true,
              'p-invalid': !!errors[name],
            })}
            {...rest}
          />
        )}
      />
      <CustomErrorMessage name={name} />
    </Form.Group>
  );
};

export default CustomDropdown;

export type CustomSelectProps = DropdownProps & BaseFormFieldProps;
