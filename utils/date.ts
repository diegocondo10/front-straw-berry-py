import moment from 'moment';
export const DATE_FORMAT = 'yyyy-MM-DD';

export const toMoment = (value, format = DATE_FORMAT): moment.Moment =>
  moment(value, format);
