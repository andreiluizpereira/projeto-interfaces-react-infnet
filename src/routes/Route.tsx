import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import OfferYourProperty from "../pages/OfferYourProperty";
import RentProperty from "../pages/RentProperty";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    path: 'imobiliaria infnet',
    children: [
      {
        element: <RentProperty />,
        path: 'alugue um imóvel'
      },
      {
        element: <OfferYourProperty />,
        path: 'ofereça um imóvel'
      }
    ]
  }
])

export default router