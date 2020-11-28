import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const CustomErrorMessage = ({ name }) => {
  const { errors } = useFormContext();
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <small className="p-invalid p-d-block w-100" style={{ fontSize: '15px' }}>
          {message}
        </small>
      )}
    />
  );
};

export default CustomErrorMessage;
