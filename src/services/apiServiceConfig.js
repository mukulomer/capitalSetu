import axios from "axios";
const API_URL = "https://api.themoviedb.org/3";

//let token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: API_URL
});

export default instance;
