import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/usersService";
import { toast } from "react-hot-toast";
import { PageLoader } from "../../view/components/PageLoader";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signOut(): void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}
export const AuthContext = createContext({} as AuthContextValue)

export function AuthContextProvider ({ children }: AuthContextProviderProps) {
  
  //estado que define se user esta logado ou nao; como valor padrao esta recebendo uma funcao, que vai pegar o token de acesso do local storage; se houver token, 
  //o valor padrao de signedIn é true, caso contrario é false
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return Boolean(storedAccessToken)
  }) 


  //fazendo query para armazenar dados em cache; se houver erro nessa request usersService.me(), captura o valor isError para usar no useEffect e deslogar o user
  //data: os dados retornados da funcao executada em queryFn
  //isFetching: diz se os dados ainda estao sendo carregados ou nao
  //isSuccess: diz se a requisicao foi feita com sucesso
  //remove: apaga os dados do cache
  const { isError, isFetching, isSuccess, remove } = useQuery({
    queryKey: ['users', 'me'],  //key q vai identificar os dados guardados em cache pelo query
    queryFn: () => usersService.me(),  //funcao q vai ser executada para buscar dados e armazenar na key
    enabled: signedIn, //a execucao desse reactQuery, que pega os dados da rota ME do backend e coloca num cache, so vai acontecer se signedIn for true
    staleTime: Infinity //tempo que os dados do cache vao ficar obsoletos (stale); nesse caso definindo como Infinity, ou seja, nunca vao ficar obsoletos
  })

  //usando useCallback para evitar que essa funcao seja executada novamente quando componente for renderizado
  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken) //salva token no localstorage
    setSignedIn(true)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove() //remove cache do react query
    setSignedIn(false)
  }, [remove])

  useEffect(() => {
    if(isError) {
      toast.error('Sua sessão expirou')
      signOut()
    }
  }, [isError, signOut])

  //so vai executar o signedIn se isSuccess, do react query, estiver true e o proprio signedIn estiver true; 
  //fazendo isso para evitar que, enquanto esta fazendo a requisicao pra api pra pegar os dados do usuario, o dashboard seja 'piscado' na tela msm que a requisicao tenha
  //dado erro
  return (
    <AuthContext.Provider 
        value={
          { signedIn: isSuccess && signedIn,  
            signin,
            signOut  }
        } >

      <PageLoader isLoading={isFetching} />
        
      { !isFetching && children }
    </AuthContext.Provider>
  )
}