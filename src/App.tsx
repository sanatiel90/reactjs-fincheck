import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./app/contexts/AuthContext";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools' //lib para monitorar o react query
      
//react query, para fazer cache de dados na app
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,  //para o react query nao ficar refazendo requisicoes automaticamente
      refetchOnWindowFocus: false //para o react query nao ficar refazendo requisicoes toda vez q a tela recebe foco
    }
  }
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Router />
        <Toaster />
      </AuthContextProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
    
  )
}
