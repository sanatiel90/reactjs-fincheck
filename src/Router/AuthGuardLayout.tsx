import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardLayoutProps {
  isPrivate: boolean;
}

export function AuthGuardLayout({ isPrivate }: AuthGuardLayoutProps) {
  const signedIn = false;

  if (!signedIn && isPrivate){
    return <Navigate to="/login" replace />  //prop replace para substituir historico de navegacao
  }

  if (signedIn && !isPrivate){
    return <Navigate to="/" replace />
  }

  return <Outlet /> //Outlet vai ser substituido pelas compoentes de rotas listados dentro do component AuthGuardLayout
}