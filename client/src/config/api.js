import axios from "axios";

// create base url
export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// set authorization token header
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
