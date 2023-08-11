import { api } from "../api";

interface MeResponse {
  name: string;  
  password: string;
}

export async function me() {
  const { data } = await api.get<MeResponse>('/users/me')
  return data;
}
