//import { sleep } from "../../utils/sleep";
import { api } from "../api";

export interface SigninBody {
  email: string;
  password: string;
}

interface SigninResponse {
  token: string;  
}

export async function signin(signinBody: SigninBody) {
  //await sleep(1500)
  const { data } = await api.post<SigninResponse>('/auth/signin', signinBody)
  return data;
}
