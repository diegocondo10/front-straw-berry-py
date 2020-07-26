import Axios from 'axios';

export const POST = async (url, body = {}) => {
  try {
    ///body.empCodigo = empCodigo;
    const res = await Axios.post(url, body);
    if ([200, 201, 202, 203].includes(res.status)) {
      const data = res.data;
      delete res.data;
      return { data, response: res };
    } else {
      return { error: true, data, response: res };
    }
  } catch (error) {
    try {
      const data = error.response.data;
      delete error.response.data;
      return { error: true, data: data, response: error.response };
    } catch (subError) {
      return { error: true };
    }
  }
};
export const PUT = async (url, body = {}) => {
  try {
    body.empCodigo = empCodigo;
    const res = await Axios.put(url, body);
    if ([200, 201, 202, 203].includes(res.status)) {
      const data = res.data;
      delete res.data;
      return { data, response: res };
    } else {
      return { error: true, data, response: res };
    }
  } catch (error) {
    try {
      const data = error.response.data;
      delete error.response.data;
      return { error: true, data: data, response: error.response };
    } catch (subError) {
      return { error: true };
    }
  }
};

export const GET = async (url) => {
  return await Axios.get(url);
};

export const DELETE = async (url) => {
  return await Axios.delete(url);
};
