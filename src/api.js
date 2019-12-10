import axios from "axios";
import * as config from "./config";

import axiosRetry from "axios-retry";
axiosRetry(axios, { retries: 10 });

const api = config.API;

export const getSlides = async () => {
  const { data: slides } = await axios.get(`${api}/slides`);
  return slides;
};
export const getSettings = async () => {
  const { data: settings } = await axios.get(`${api}/settings`);
  return settings;
};
export const getTeachers = async () => {
  const { data: teachers } = await axios.get(`${api}/teachers`);
  return teachers;
};

export const getCourses = async () => {
  const { data: courses } = await axios.get(`${api}/courses`);
  return courses;
};
