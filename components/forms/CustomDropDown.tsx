import classnames from 'classnames';
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
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
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={null}
        render={({ onChange, value }) => (
          // @ts-ignore
          <Dropdown
            value={value}
            onChange={(event) => {
              onChange(event.value);
              onChangeFn && onChangeFn(event.value);
            }}
            placeholder={placeholder || 'Seleccione'}
            className={classnames({
              [className]: true,
              'w-100 p-inputtext-sm': true,
              'p-invalid': !!errors[name],
            })}
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomDropdown;

export type CustomSelectProps = DropdownProps & BaseFormFieldProps;
