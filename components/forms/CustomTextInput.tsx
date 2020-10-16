import classnames from 'classnames';
import { InputText, InputTextProps } from 'primereact/inputtext';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { BaseFormFieldProps } from './types';

const CustomTextInput = (props: CustomTextInputProps) => {
  const { label, name, rules, className, ...rest } = props;
  const { errors, control } = useFormContext();

  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        render={({ onChange, value }) => (
          // @ts-ignore
          <InputText
            value={value}
            onChange={({ currentTarget }) => onChange(currentTarget.value)}
            className={classnames({
              [className]: true,
              'p-d-block w-100 p-inputtext-sm': true,
              'p-invalid': !!errors[name],
            })}
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomTextInput;

export type CustomTextInputProps = InputTextProps & BaseFormFieldProps;
