import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLoginController } from "./useLoginController";

export function Login(){
  const { formHandleSubmit, register } = useLoginController()
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center " >
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Entre em sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span> 
          <Link to="/register" className="tracking-[-0.5px] font-medium text-teal-900 " >Crie uma conta</Link>
        </p> 
      </header>

      <form onSubmit={formHandleSubmit}  className="mt-[60px] flex flex-col gap-4">
        <Input {...register('email')} type="email" placeholder="E-mail" />
        <Input {...register('password')} name="password" type="password" placeholder="Password" />

        <Button type="submit" >
          Entrar 
        </Button>        
      </form>
    </>
  )
}