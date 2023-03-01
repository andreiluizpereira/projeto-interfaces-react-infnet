import { createBrowserRouter } from "react-router-dom";
import LayoutPadrao from "../layout/LayoutPadrao";
import Alugar from "../pages/Alugar";
import Anunciar from "../pages/Anunciar";

const router = createBrowserRouter([
  {
    element: <LayoutPadrao />,
    path: 'imobiliaria-infnet',
    children: [
      {
        element: <Alugar />,
        path: 'alugar-imovel'
      },
      {
        element: <Anunciar />,
        path: 'anunciar-imovel'
      },
    ]
  }
])

export default router