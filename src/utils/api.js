import axios from "axios";

const defaults = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

const api = (method, endPoint, variables) => {
  // console.log(import.meta.env.VITE_API_URL);
  return new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${endPoint}`,
      method,
      headers: defaults.headers,
      params: variables,
    })
      .then((response) => resolve(response.data))
      .catch((error) => {
        reject(error);
        return defaults.error.message;
      });
  });
};

export default {
  get: (...args) => api("get", ...args),
};
