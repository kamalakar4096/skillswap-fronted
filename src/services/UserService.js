import axios from "axios";

const API_URL = "http://localhost:8080/users";

export const addUser = (user) => {
  return axios.post(API_URL + "/add", user);
};

export const getUsers = () => {
  return axios.get(API_URL + "/all");
};