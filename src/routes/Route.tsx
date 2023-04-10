import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Alugar from "../pages/Alugar";
import FaleConosco from "../pages/FaleConosco";

const router = createBrowserRouter([
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
    }]
  }
])

export default router;