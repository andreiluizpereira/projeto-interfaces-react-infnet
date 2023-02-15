import React from "react";
import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <Footer.conteiner>
      <Footer.direitos>Imobiliária Infnet. Todos os direitos reservados.</Footer.direitos>
    </Footer.conteiner>
  );
}

Footer.conteiner = styled.div`
  text-align: start;
  background-image: linear-gradient(110deg, #008dfe 0, #0089fd 16.67%, #1086fc 33.33%, #4682f9 50%, #627ef6 66.67%, #777af1 83.33%, #8875ec 100%);
  margin-top: 60px;
  
`;

Footer.direitos = styled.p`
  max-width: 1000px;
  padding: 10px 20px;
  margin: auto;
  color: #fff;
`;