import axios from "axios";

const API_URL = "http://localhost:8080/skills";

export const addSkill = (skill) => {
  return axios.post(API_URL + "/add", skill);
};

export const getSkills = () => {
  return axios.get(API_URL + "/all");
};