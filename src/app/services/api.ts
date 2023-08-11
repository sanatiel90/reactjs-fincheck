import axios from "axios";
import { localStorageKeys } from "../config/localStorageKeys";
import { sleep } from "../utils/sleep";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  //forma de importar var de ambiente pelo VITE  
})

//interceptors do axios sao como middlewares, executados antes da requisicao acontecer; 
//neste caso estamos acessando a request, verificando se tem um token no local storage, se houver, incluindo ele nos headers das proximas requests
//o param config é como se fosse a request, e no final vc retorna ela para que continue o fluxo
api.interceptors.request.use(config => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN)
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

api.interceptors.response.use(async data => {
  await sleep(500)
  return data;
})