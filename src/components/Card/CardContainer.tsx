import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../Button";
import { FrontCard } from "./FrontCard";
import Apartamento1 from '../../images/ap1.jpg';
import Apartamento2 from '../../images/ap2.jpg';
import Apartamento3 from '../../images/ap3.jpg';
import Apartamento4 from '../../images/ap4.jpg';
import Apartamento5 from '../../images/ap5.jpg';
import Apartamento6 from '../../images/ap6.jpg';
import { BackCard } from "./BackCard";



const CardContainer = () => {
  
  const [buttonText, setButtonText] = useState("Detalhes");
  
  const handleClick = () => {
    setButtonText("Tenho interesse");
  }

  return (
    <CardContainer.Container>
      {buttonText === 'Detalhes' ? 
        <FrontCard urlImage={Apartamento3} aluguel={1250} cidadeEstado='Caxias do Sul/RS' bairro={'Exposição'} m2={72} dormitorio={2} banheiro={2} vagas={2} areaPrivativa={116}/> 
        : 
        <BackCard aluguel={1250} condominio={250} iptu={800} areaTotal={128} areaPrivativa={116} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />}
      <Button texto={buttonText} clickFunction={handleClick} />
    </CardContainer.Container>
  );
}

CardContainer.Container = styled.div`
max-width: 370;
height: 100%;
text-align: center;
border-radius: 12px;
box-shadow: 3px 3px 12px 3px rgba(0, 0, 0, 0.25);
display: grid;
Button {
  align-self: flex-end;
  margin: 25px 15px;
}
`;

export default CardContainer;