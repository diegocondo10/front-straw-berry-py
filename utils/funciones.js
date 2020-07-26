export const objectToB64 = (data) =>
  Buffer.from(JSON.stringify(data)).toString('base64');

export const b64ToObject = (b64) =>
  JSON.parse(new Buffer(b64, 'base64').toString('ascii'));
