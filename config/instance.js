import axios from "axios";

const baseURL = "https://api.jikan.moe/v4";

const instance = axios.create({
  baseURL,
});

export default instance;
