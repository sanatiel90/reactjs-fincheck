import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  //forma de importar var de ambiente pelo VITE
  headers: {}
})

