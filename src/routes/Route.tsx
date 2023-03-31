import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "../pages/Shared/PrivateRouter";
import Home from "../layout/Home";
import Alugar from "../pages/Home/Alugar";
import FaleConosco from "../pages/Home/FaleConosco";
import Acesso from "../layout/Acesso";
import Entrar from "../pages/Acess/Entrar";
import CriarConta from "../pages/Acess/CriarConta";
import RecuperarSenha from "../pages/Acess/RecuperarSenha";

const router = createBrowserRouter([
  {
    element: <PrivateRouter />,
    path: '',
    children: [
      {
        element: <Home />,
        path: '',
        children: [
          {
            element: <Alugar />,
            path: ''
          },
          {
            element: <FaleConosco />,
            path: 'fale-conosco'
          },
        ]
      }
    ]
  },
  {
    element: <Acesso />,
    path: 'usuario',
    children: [
      {
        element: <Entrar />,
        path: 'entrar'
      },
      {
        element: <CriarConta />,
        path: 'criar-conta'
      },
      {
        element: <RecuperarSenha />,
        path: 'recuperar-senha'
      }
    ]
  }
])

export default router;