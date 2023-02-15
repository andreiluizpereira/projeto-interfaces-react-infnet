import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import OfferYourProperty from '../pages/OfferYourProperty';
import RentProperty from '../pages/RentProperty';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <DefaultLayout.Container>
        <Outlet />
      </DefaultLayout.Container>
      <Footer />
    </>
  )
}

DefaultLayout.Container = styled.main`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
`;

export default DefaultLayout