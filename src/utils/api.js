import axios from "axios";

export const serverUrl = `http://127.0.0.1:5000/api`;
export let api = axios.create({
  baseURL: serverUrl,
});

export const GET_DATA_URL = "/getData?page=";
export const GET_GEO_DATA_URL = "/getGeoData";

export const getData = (page) => {
  const req = api.get(GET_DATA_URL + page);
  return req;
};

export const getGeoData = () => {
  const req = api.get(GET_GEO_DATA_URL);
  return req;
};
