import { ColorsDropDownInput } from "../../../../components/ColorsDropDownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal(){
  const { closeNewAccountModal, isNewAccountModalOpen } = useNewAccountModalController()
  return (
    <Modal title="Nova Conta" open={isNewAccountModalOpen} onClose={closeNewAccountModal} >
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>          
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input 
            type="text"
            name="name"
            placeholder="Nome da Conta"
          />

          <Select             
            placeholder="Tipo"
            options={[
              {
                value: 'CHEKING',
                label: 'Conta Corrente'
              },
              {
                value: 'INVESTMENT',
                label: 'Investimentos'
              },
              {
                value: 'CASH',
                label: 'Dinheiro Físico'
              },
            ]}
            />

            <ColorsDropDownInput />
        </div>
      </form>
    </Modal>
  )
}