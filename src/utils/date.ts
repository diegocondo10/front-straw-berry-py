import moment from 'moment';
export const DATE_FORMAT = 'yyyy-MM-DD';
export const DATE_TIME_FORMAT = 'yyyy-MM-DD HH:mm';

export const toMoment = (value, format = DATE_FORMAT): moment.Moment =>
  moment(value, format);
