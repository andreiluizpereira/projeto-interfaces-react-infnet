import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';

const LayoutPadrao = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutPadrao