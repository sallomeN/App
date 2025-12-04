import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.88.85:5000/api",
});
