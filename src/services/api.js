import axios from "axios";

const API = axios.create({
  baseURL: "https://capstone-squad.herokuapp.com",
});

export default API;
