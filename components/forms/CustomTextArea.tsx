import { InputTextarea, InputTextareaProps } from 'primereact/inputtextarea';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { BaseFormFieldProps } from './types';
import classnames from 'classnames';

const CustomTextArea = (props?: CustomTextAreaProps) => {
  const { label, name, rules, className, ...rest } = props;

  const { control, errors } = useFormContext();

  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        render={({ onChange, value }) => (
          // @ts-ignore
          <InputTextarea
            value={value}
            className={classnames({
              [className]: true,
              'w-100': true,
              'p-invalid': !!errors[name],
            })}
            onChange={({ currentTarget }) => {
              onChange(currentTarget.value);
            }}
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomTextArea;

export type CustomTextAreaProps = InputTextareaProps & BaseFormFieldProps;
