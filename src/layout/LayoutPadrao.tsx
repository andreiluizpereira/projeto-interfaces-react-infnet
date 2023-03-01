import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Outlet } from "react-router-dom";

// criar contexto

const LayoutPadrao = () => {
  return (
    <>
      <Header /> 
      {/* Provider */}    
        <Outlet/>
      {/* Provider */}  
      <Footer />
    </>
  )
}

export default LayoutPadrao