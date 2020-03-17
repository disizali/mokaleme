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

export const getBooks = async course => {
  const { data: books } = await axios.get(`${api}/${course}/books`);
  return books;
};

export const getBook = async bookName => {
  const { data: books } = await axios.get(`${api}/book/${encodeURI(bookName)}`);
  return books;
};

export const getBlog = async () => {
  const { data: blog } = await axios.get(`${api}/blog`);
  return blog;
};

export const getPost = async postTitle => {
  const { data: post } = await axios.get(`${api}/blog/${encodeURI(postTitle)}`);
  return post;
};
