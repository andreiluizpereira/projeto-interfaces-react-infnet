import { createBrowserRouter } from "react-router-dom";
import LayoutPadrao from "../layout/LayoutPadrao";
import Alugar from "../pages/Alugar";
import Anunciar from "../pages/FaleConosco";

const router = createBrowserRouter([
  {
    element: <LayoutPadrao />,
    path: '',
    children: [
      {
        element: <Alugar />,
        path: ''
      },
      {
        element: <Anunciar />,
        path: 'fale-conosco'
      },
    ]
  }
])

export default router