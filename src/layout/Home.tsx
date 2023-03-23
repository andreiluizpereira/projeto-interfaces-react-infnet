import { Footer } from '../components/Shared/Footer';
import { Header } from '../components/Shared//Header';
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header /> 
        <Outlet/> 
      <Footer />
    </>
  )
}

export default Home;