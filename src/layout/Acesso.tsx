import styled from 'styled-components';
import Logo from '../images/Logo.svg';
import { Outlet } from "react-router-dom";

const Acesso = () => {
  return (
    <Acesso.Body>
      <img src={Logo} alt="" />
      <Acesso.Container>
        <Outlet/>
      </Acesso.Container>
    </Acesso.Body>
  );
}

Acesso.Body = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-top: 100px;
  display: grid;
  justify-items: center;
`;

Acesso.Container = styled.div`
  margin-top: 100px;
  width: 500px;
  padding: 30px;
  display: grid;
  background: linear-gradient(90deg, rgba(79, 70, 229, 0.75) 0%, rgba(70, 133, 229, 0.75) 100%);
  box-shadow: 3px 3px 12px 3px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
`;

export default Acesso;