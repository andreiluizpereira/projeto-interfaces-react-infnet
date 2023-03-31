import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/usuario/entrar" />
}

export default PrivateRouter;