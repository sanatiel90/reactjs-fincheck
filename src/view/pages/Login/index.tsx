import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { useLoginController } from "./useLoginController";
import { Input } from "../../components/Input";

export function Login(){
  const { handleSubmit, register, errors } = useLoginController()
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center " >
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Entre em sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span> 
          <Link to="/register" className="tracking-[-0.5px] font-medium text-teal-900 " >Crie uma conta</Link>
        </p> 
      </header>

      <form onSubmit={handleSubmit}  className="mt-[60px] flex flex-col gap-4">
        
        <Input type="email" placeholder="E-mail" {...register('email')} />
        <span>{errors && errors.email?.message}</span>

        <Input {...register('password')}  type="password" placeholder="Password" />



        <span>{errors && errors.password?.message}</span>

        <input type="text" { ...register('teste') } />
        

        <Button type="submit" >
          Entrar 
        </Button>        
      </form>
    </>
  )
}