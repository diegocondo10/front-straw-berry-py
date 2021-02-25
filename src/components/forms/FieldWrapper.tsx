import React from 'react';
import CustomErrorMessage from './CustomErrorMessage';

const FieldWrapper = ({ children, name, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      {children}

      <CustomErrorMessage name={name} />
    </div>
  );
};

export default FieldWrapper;
