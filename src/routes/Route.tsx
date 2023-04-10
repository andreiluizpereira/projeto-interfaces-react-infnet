import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "../layout/SharedLayout";
import Alugar from "../pages/Alugar";
import FaleConosco from "../pages/FaleConosco";

const router = createBrowserRouter([
  {
    element: <SharedLayout />,
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