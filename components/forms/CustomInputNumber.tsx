import { InputNumber, InputNumberProps } from 'primereact/inputnumber';
import React from 'react';
import { BaseFormFieldProps } from './types';
import { useFormContext, Controller } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import classnames from 'classnames';

const CustomInputNumber = (props?: CustomInputNumberProps) => {
  const { label, name, rules, className, ...rest } = props;

  const { control, errors } = useFormContext();

  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={0}
        render={({ onChange, value }) => (
          <InputNumber
            value={Number(value)}
            className={classnames({
              [className]: true,
              'w-100 p-inputtext-sm': true,
              'p-invalid': !!errors[name],
            })}
            onChange={({ value }) => {
              onChange(value);
            }}
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomInputNumber;

export type CustomInputNumberProps = InputNumberProps & BaseFormFieldProps;
