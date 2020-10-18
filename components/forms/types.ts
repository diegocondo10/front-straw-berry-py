import { ValidationRules } from 'react-hook-form';

export interface BaseFormFieldProps {
  leftChildren?: any;
  rigthChildren?: any;
  name: string;
  label: string;
  rules?: ValidationRules;
}
