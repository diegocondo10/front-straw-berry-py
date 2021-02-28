import useCustomRef from '@hooks/useCustomRef';
import classnames from 'classnames';
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { BaseFormFieldProps } from './types';

const CustomDropDown = (props?: CustomSelectProps) => {
  const {
    label,
    rules,
    name,
    onChange: onChangeFn,
    placeholder,
    className,
    ...rest
  } = props;

  const { control } = useFormContext();
  const { focusRef, setRef } = useCustomRef<any>(null);
  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={null}
        onFocus={focusRef}
        render={({ onChange, value }, { invalid }) => (
          // @ts-ignore
          <Dropdown
            value={value}
            onChange={(event) => {
              onChange(event.value);
              onChangeFn?.(event.value);
            }}
            placeholder={placeholder || 'Seleccione'}
            className={classnames({
              'w-100 p-inputtext-sm': true,
              'p-invalid': invalid,
              [className]: true,
            })}
            ref={setRef('focusInput')}
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomDropDown;

export type CustomSelectProps = DropdownProps & BaseFormFieldProps;
