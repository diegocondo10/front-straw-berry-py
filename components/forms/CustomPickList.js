import { ErrorMessage } from '@hookform/error-message';
import { PickList } from 'primereact/picklist';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';

const CustomPickList = ({
  name,
  rules,
  source = [],
  target = [],
  itemTemplate,
  label,
  sourceHeader,
  targetHeader,
  showSourceControls = false,
  showTargetControls = false,
}) => {
  const { control, errors } = useFormContext();
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
            itemTemplate={itemTemplate}
            sourceHeader={sourceHeader}
            targetHeader={targetHeader}
            responsive={true}
            sourceStyle={{ height: '300px' }}
            targetStyle={{ height: '300px' }}
            showSourceControls={showSourceControls}
            showTargetControls={showTargetControls}
            onChange={({ source, target }) => {
              setLocalSource(source);
              onChange(target);
            }}
          />
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

export default CustomPickList;
