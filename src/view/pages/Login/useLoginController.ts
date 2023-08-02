import { useForm } from "react-hook-form";
import { z } from "zod";
//import { zodResolver } from "@hookform/resolvers/zod";


//validacoes do zod
const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha precisa ter pelo menos 8 caracteres'),
  teste: z.string()
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
    //resolver: zodResolver(schema)
  })

  const handleSubmit = hookFormHandleSubmit((data) => {    
    console.log(data)
  })

  return { handleSubmit, register, errors }
}