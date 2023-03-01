import { useState } from 'react';
import styled from 'styled-components';
import CardContainer from '../components/Card/CardContainer';

// uiseCOntext
const Alugar = () => {
  const [properties, setProperties] = useState([
    <CardContainer />,
    <CardContainer />,
    <CardContainer />,
    <CardContainer />,
    <CardContainer />,
    <CardContainer />
  ])

  function insertProperty() {
    setProperties([...properties, <CardContainer />]);
  }

  return (
    <>
      <Alugar.Titulo>
        <span>Alugue</span> um imóvel.
      </Alugar.Titulo>
      <Alugar.Layout>
        {properties.map(propertie => {
          return propertie
        })}
        <button onClick={insertProperty}>ANUNCIAR</button>
      </Alugar.Layout>
    </>
  )
}

Alugar.Titulo = styled.h2`
  max-width: 1280px;
  margin: auto;
  text-align: center;
  margin-bottom: 60px;
  font-size: 4rem;
  font-weight: 900;
  line-height: 4.68rem;
  letter-spacing: 0.095em;
  color: #47505F;
  span {
    color: #4F46E5;
  }
`;

Alugar.Layout = styled.main`
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
  gap: 40px;
  justify-content: center;
  padding-bottom: 80px;
`;

export default Alugar;