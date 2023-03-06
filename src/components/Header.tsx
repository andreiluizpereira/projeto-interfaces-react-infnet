import React from "react";
import Logo from '../images/Logo.svg';
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <Header.container>
      <Link to=""><img src={Logo} alt="" /></Link>
      <Header.navegacao>
        <ul>
          <li><a href="#contato" className="link">Contato</a></li>
          <li>
            <Link to="/fale-conosco" className="link">
              Fale conosco
            </Link>
          </li>
          <li>
            <Link to="" className="alugar">
              Alugar
            </Link>
          </li>
        </ul>
      </Header.navegacao>
    </Header.container>
  );
}

Header.container = styled.header`
  max-width: 1280px;
  margin: auto;
  padding: 20px 0px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Header.navegacao = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 90px;
    font-weight: 500;
    font-size: 1.5rem;
  }
  .link:hover {
    border-bottom: 3px solid #4F46E5;
  }
  .link:visited {
    color: #4F46E5;
  }
  .alugar {
    color: #fff;
    background-color: #4F46E5;
    padding: 10px 20px;
    border-radius: 10px;
    transition: .5s;
  }
  .alugar:hover {
    opacity: .8;
  }
`;