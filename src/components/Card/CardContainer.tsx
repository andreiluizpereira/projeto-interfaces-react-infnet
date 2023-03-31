import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";
import { FrontCardProps } from "../../types/PropertiesInfo";
import { BackCardProps } from "../../types/PropertiesInfo";
import Button from "../Shared/Button";

interface CardProps extends FrontCardProps, BackCardProps {}

const CardContainer = ({...props}: CardProps) => {
  
  const [details, setDetails] = useState(false);
  
  const handleClick = () => {
    setDetails(true);
  }

  return (
    <CardContainer.Container>
      {!details ? 
        <FrontCard urlImage={props .urlImage} aluguel={props .aluguel} cidadeEstado={props .cidadeEstado} bairro={props .bairro} dormitorio={props .dormitorio} banheiro={props .banheiro} vagas={props .vagas} areaPrivativa={props .areaPrivativa}/> 
        : 
        <BackCard aluguel={props .aluguel} condominio={props .condominio} iptu={props .iptu} areaTotal={props .areaTotal} areaPrivativa={props .areaPrivativa} sobreImovel={props .sobreImovel} />
      }
      {!details ? 
        <CardContainer.Button onClick={handleClick}>Detalhes</CardContainer.Button>
      :
        <Link to="/fale-conosco">
          <CardContainer.Button>Tenho interesse</CardContainer.Button>
        </Link>
      }
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
`;

CardContainer.Button = styled(Button)`
  align-self: flex-end;
  margin: 25px 15px;
  width: 320px;
`;

export default CardContainer;