import { useState } from "react";

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  function handleSelectBankAccount(bankAccountId: string) {
    //se estiver mandando o msm id, atribuir nulo, caso contrario, atribuir o id
    setSelectedBankAccountId(prevState => (
      prevState === bankAccountId ? null : bankAccountId
    ))
  }

  function handledChangeYear(step: number){
    setSelectedYear(prevState => prevState + step)
  }

  return {
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
    handledChangeYear
  }
}