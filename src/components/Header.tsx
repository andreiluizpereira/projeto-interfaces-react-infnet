import React from "react";
import styled from "@emotion/styled";

export const Header = () => {

  return (
    <Header.conteiner>
      <Header.menu>
        <h1>Imobiliária Infnet</h1>
        <Header.links>
          <li><a href="">Alugue um imóvel</a></li>
          <li><a href="">Ofereça seu imóvel</a></li>
          <li><a href="">Contato</a></li>
        </Header.links>
      </Header.menu>
    </Header.conteiner>
  );
}

Header.conteiner = styled.div`
  background-image: linear-gradient(110deg, #008dfe 0, #0089fd 16.67%, #1086fc 33.33%, #4682f9 50%, #627ef6 66.67%, #777af1 83.33%, #8875ec 100%);
  margin-bottom: 40px;
`;

Header.menu = styled.header`
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

Header.links = styled.ul`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 30px;
  font-weight: bold;
  a {
    color: #fff;
  }
`;