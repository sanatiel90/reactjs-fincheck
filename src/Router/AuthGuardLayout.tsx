import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

interface AuthGuardLayoutProps {
  isPrivate: boolean;
}

export function AuthGuardLayout({ isPrivate }: AuthGuardLayoutProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate){
    return <Navigate to="/login" replace />  //prop replace para substituir historico de navegacao
  }

  if (signedIn && !isPrivate){
    return <Navigate to="/" replace />
  }

  return <Outlet /> //Outlet vai ser substituido pelas compoentes de rotas listados dentro do component AuthGuardLayout
}