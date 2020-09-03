import React from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import moment from 'moment';

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

const CustomDatePicker = ({ label, name, rules }) => {
  const { control } = useFormContext();

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={null}
        render={({ onChange, value }) => (
          <Calendar
            className="w-100"
            inputClassName="w-100"
            id="spanish"
            value={moment(value).toDate()}
            onChange={(e) => onChange(moment(e.value).format('yyyy-MM-DD'))}
            locale={es}
            dateFormat="dd/mm/yy"
            monthNavigator
            yearNavigator
            yearRange="1930:2030"
            readOnlyInput
          />
        )}
      />
    </Form.Group>
  );
};

export default CustomDatePicker;
