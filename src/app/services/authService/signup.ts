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
  const { data } = await api.post<SignupResponse>('/auth/signup', signupBody)
  return data;
}
