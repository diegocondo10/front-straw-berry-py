import classnames from 'classnames';
import { Password, PasswordProps } from 'primereact/password';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { BaseFormFieldProps } from './types';

const CustomPasswordInput = (props: CustomPasswordInputProps) => {
  const { label, name, rules, className, ...rest } = props;
  const { control } = useFormContext();

  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        render={({ onChange, value }, { invalid }) => (
          // @ts-ignore
          <Password
            value={value}
            onChange={({ currentTarget }) => onChange(currentTarget.value)}
            className="w-100"
            inputClassName={classnames({
              [className]: true,
              'p-d-block w-100': true,
              'p-invalid': invalid,
            })}
            weakLabel="Debil"
            mediumLabel="Medio"
            strongLabel="Fuerte"
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomPasswordInput;

export type CustomPasswordInputProps = PasswordProps & BaseFormFieldProps;
