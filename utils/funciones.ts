import moment from 'moment';

export const objectToB64 = (data) =>
  Buffer.from(JSON.stringify(data)).toString('base64');

export const b64ToObject = (b64) =>
  JSON.parse(new Buffer(b64, 'base64').toString('ascii'));

export const toMoment = (date, format) => {
  const newDate =
    moment(date).format('dddd DD [de] MMMM [de] yyyy, [a las ]') +
    moment(date).format('HH:mm:ss a');
  return newDate.toUpperCase();
};

export const getId = (object, param = 'id') => {
  return object[param];
};
