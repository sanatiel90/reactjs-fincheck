import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import { SignupBody } from "../../../app/services/authService/signup";


const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().nonempty('E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve ter pelo menos 8 caracteres')
})

type FormData = z.infer<typeof schema>;

export function useRegisterController(){
  const { 
    handleSubmit, 
    register, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })  

  /*usando lib React Query: useMutation() é usada quando vc vai modificar informacoes na API (usando POST,PUT,PATCH,DELETE); ela recebe alguns parametros, como "mutationFn",
    que vai indicar a funcao a ser executada para fazer a requisicao à API; o useMutation() retorna algumas coisas, como um state "isLoading", que indica se a req. ainda esta
    sendo feita ou nao, e uma funcao assincrona "mutateAsync", que vai ser usada para chamar o useMutation() onde, no seu codigo, vai ser feita a req. http */
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SignupBody) => {
      return authService.signup(data); 
    }
  })

  const handleFormSubmit = handleSubmit(async (data) => {
     const { token } = await mutateAsync(data)
     console.log(token)
     console.log({ isLoading })
  })

  return { handleFormSubmit, register, errors }
}