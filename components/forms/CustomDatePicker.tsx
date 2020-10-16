import classNames from 'classnames';
import moment from 'moment';
import { Calendar, CalendarProps } from 'primereact/calendar';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { BaseFormFieldProps } from './types';

const es = {
  firstDayOfWeek: 1,
  dayNames: [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  monthNames: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
  monthNamesShort: [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic',
  ],
  today: 'Hoy',
  clear: 'Limpiar',
};

const CustomDatePicker = (props?: CustomDatePickerProps) => {
  const { control, errors } = useFormContext();
  const { label, name, rules, className, ...rest } = props;
  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={null}
        render={({ onChange, value }) => (
          <Calendar
            className={classNames({
              [className]: true,
              'w-100  p-inputtext-sm': true,
              'p-invalid': !!errors[name],
            })}
            inputClassName="w-100"
            id="spanish"
            value={moment(value).toDate()}
            onChange={(e) => {
              const inputValue: any = e.value;
              onChange(moment(inputValue).format('yyyy-MM-DD'));
            }}
            locale={es}
            dateFormat="dd/mm/yy"
            monthNavigator
            yearNavigator
            yearRange="1930:2030"
            readOnlyInput
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomDatePicker;

export type CustomDatePickerProps = CalendarProps & BaseFormFieldProps;
