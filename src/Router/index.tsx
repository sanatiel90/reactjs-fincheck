import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthGuardLayout } from "./AuthGuardLayout";
import { Login } from "../view/pages/Login";
import { Register } from "../view/pages/Register";
import { Dashboard } from "../view/pages/Dashboard";
import { AuthLayout } from "../view/layouts/AuthLayout";

export function Router(){
  return (
    <BrowserRouter>
      <Routes>
        {/* rotas publicas */ }  
        <Route element={<AuthGuardLayout isPrivate={false} />} >
          <Route element={<AuthLayout />}>  
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Route>
        </Route>

        {/* rotas privadas */ }
        <Route element={<AuthGuardLayout isPrivate />}>
          <Route path="/" element={<Dashboard/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

