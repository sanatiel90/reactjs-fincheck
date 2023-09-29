import { api } from "../api";

export interface BankAccountParams {
  name: string;
  initialBALANCE: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
}

export async function create(createBankAccount: BankAccountParams) {  
  const { data } = await api.post('/bank-accounts', createBankAccount)
  return data;
}
