import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../app/services/authService";
import { SigninBody } from "../../../app/services/authService/signin";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";


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
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema) //o resolver vai automaticamente validar os dados com base nas regras do schema fornecido; os eventuais erros vai ser retornados na prop formState
  })

  /*usando lib React Query: useMutation() é usada quando vc vai modificar informacoes na API (usando POST,PUT,PATCH,DELETE); ela recebe alguns parametros, como "mutationFn",
    que vai indicar a funcao a ser executada para fazer a requisicao à API; o useMutation() retorna algumas coisas, como um state "isLoading", que indica se a req. ainda esta
    sendo feita ou nao, e uma funcao assincrona "mutateAsync", que vai ser usada para chamar o useMutation() onde, no seu codigo, vai ser feita a req. http */
    const { mutateAsync, isLoading } = useMutation({
      mutationFn: async (data: SigninBody) => {
        return authService.signin(data); 
      }
    })

    //pegando funcao q faz o login
    const { signin } = useAuth()
  
    const handleFormSubmit = handleSubmit(async (data) => {
      try {
        const { token } = await mutateAsync(data) //aqui faz a requisicao para a rota de login do backend
        signin(token)  //aqui seta o estado que define o user como logado na aplicacao para true
      } catch {
        toast.error('Credenciais inválidas')
      } 
      
    })

  return { handleFormSubmit, register, errors, isLoading }
}