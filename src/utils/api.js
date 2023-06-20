import axios from "axios";

export const serverUrl = `http://127.0.0.1:5000/api`;
export let api = axios.create({
  baseURL: serverUrl,
});

export const GET_DATA_URL = "/getData?page=";
export const GET_GEO_DATA_URL = "/getGeoData";
export const GET_REL_DATA_URL = "/getRelevanceData";
export const GET_TOPIC_DATA_URL = "/getTopicData";
export const GET_LIKE_DATA_URL = "/getLikeData";
export const GET_SEC_DATA_URL = "/getSecData";

export const getData = (page) => {
  const req = api.get(GET_DATA_URL + page);
  return req;
};

export const getGeoData = () => {
  const req = api.get(GET_GEO_DATA_URL);
  return req;
};
export const getRelData = () => {
  const req = api.get(GET_REL_DATA_URL);
  return req;
};
export const getTopicData = () => {
  const req = api.get(GET_TOPIC_DATA_URL);
  return req;
};
export const getLikeData = () => {
  const req = api.get(GET_LIKE_DATA_URL);
  return req;
};
export const getSecData = () => {
  const req = api.get(GET_SEC_DATA_URL);
  return req;
};
