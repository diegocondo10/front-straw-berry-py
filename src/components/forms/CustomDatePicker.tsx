import { DATE_FORMAT } from 'src/utils/date';
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
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
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
  const { control } = useFormContext();
  const { label, name, rules, className, ...rest } = props;

  const setValue = (value: string | Date) => {
    if (typeof value === 'string') {
      return moment(value, DATE_FORMAT).toDate();
    }
    return value;
  };

  return (
    <FieldWrapper label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={{
          setValueAs: (value) => {
            return value ? moment(value).format(DATE_FORMAT) : value;
          },
          ...rules,
        }}
        defaultValue={null}
        render={({ onChange, value }, { invalid }) => (
          <Calendar
            id={name}
            className={classNames({
              [className]: true,
              'w-100': true,
              'p-invalid': invalid,
            })}
            inputClassName="w-100"
            value={setValue(value)}
            onChange={(e) => onChange(e.value)}
            dateFormat="dd/mm/yy"
            placeholder="DD/MM/yyyy"
            monthNavigator
            yearNavigator
            yearRange="1930:2030"
            // readOnlyInput
            {...rest}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default CustomDatePicker;

export type CustomDatePickerProps = CalendarProps & BaseFormFieldProps;
