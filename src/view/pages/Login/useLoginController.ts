import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../app/services/api";


//validacoes do zod
const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha precisa ter pelo menos 8 caracteres')  
})

//criando um tipo com base no schema do zod
type FormData = z.infer<typeof schema>;

//hook para encapsular os states do form, que serao gerenciados pelo react-hook-forms
export function useLoginController() {
  const { 
    register, 
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema) //o resolver vai automaticamente validar os dados com base nas regras do schema fornecido; os eventuais erros vai ser retornados na prop formState
  })

  const handleSubmit = hookFormHandleSubmit(async (data) => {    
    console.log('here we go')
    await api.post('/auth/signin', data)
  })

  return { handleSubmit, register, errors }
}