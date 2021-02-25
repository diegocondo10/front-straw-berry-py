import { PickList, PickListProps } from 'primereact/picklist';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';
import CustomErrorMessage from './CustomErrorMessage';
import { BaseFormFieldProps } from './types';

const CustomPickList = (props?: CustomPickListProps) => {
  const {
    name,
    rules,
    source = [],
    target = [],
    label,
    showSourceControls = false,
    showTargetControls = false,
    ...rest
  } = props;

  const { control } = useFormContext();
  const [localSource, setLocalSource] = useState(source);

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        rules={rules}
        render={({ onChange, value }) => (
          <PickList
            source={localSource}
            target={value || target}
            sourceStyle={{ height: '250px' }}
            targetStyle={{ height: '250px' }}
            showSourceControls={showSourceControls}
            showTargetControls={showTargetControls}
            onChange={({ source, target }) => {
              setLocalSource(source);
              onChange(target);
            }}
            {...rest}
          />
        )}
      />

      <CustomErrorMessage name={name} />
    </Form.Group>
  );
};

export default CustomPickList;

export type CustomPickListProps = PickListProps & BaseFormFieldProps;
