//import { sleep } from "../../utils/sleep";
import { api } from "../api";

export interface SignupBody {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  token: string;  
}

export async function signup(signupBody: SignupBody) {
  //await sleep(1500)
  const { data } = await api.post<SignupResponse>('/auth/signup', signupBody)
  return data;
}
