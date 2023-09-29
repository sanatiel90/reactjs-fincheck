import { createContext, useCallback, useState } from "react";

interface DashboardContextValue {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  toggleValuesVisibility(): void;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  isNewTransactionModalOpen: boolean;
  openNewTransactionModal(type: 'INCOME' | 'EXPENSE' ): void;
  closeNewTransactionModal(): void;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
}


export const DashboardContext = createContext({} as DashboardContextValue)

export function DashboardProvider({ children }: { children: React.ReactNode }) {

  const [areValuesVisible, setAreValuesVisible] = useState(true)
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(true)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  const [newTransactionType, setNewTransactionType] = useState<'INCOME' | 'EXPENSE' | null>(null)

  //useCallback para evitar erros de uso de funcao dentro do context 
  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState)
  }, [])

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true)
  }, [])

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false)
  }, [])

  const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type)
    setIsNewTransactionModalOpen(true)
  }, [])

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null)
    setIsNewTransactionModalOpen(false)
  }, [])

  return (
    <DashboardContext.Provider 
      value={{
        areValuesVisible, 
        toggleValuesVisibility,
        closeNewAccountModal,
        openNewAccountModal,
        isNewAccountModalOpen,
        closeNewTransactionModal,
        openNewTransactionModal,
        isNewTransactionModalOpen,
        newTransactionType
      }}>
        { children }
    </DashboardContext.Provider>
  )
}