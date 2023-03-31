import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../Shared/Button";
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";
import { Link } from "react-router-dom";

type PropertyInfoProps = {
  urlImage: string;
  aluguel: number;
  cidadeEstado: string;
  bairro: string;
  dormitorio: number;
  banheiro: number;
  vagas: number;
  condominio: number;
  iptu: number;
  areaTotal: number;
  areaPrivativa: number;
  sobreImovel: string;
}

const CardContainer = (props: PropertyInfoProps) => {
  
  const [details, setDetails] = useState(false);
  
  const handleClick = () => {
    setDetails(true);
  }

  return (
    <CardContainer.Container>
      {!details ? 
        <FrontCard urlImage={props.urlImage} aluguel={props.aluguel} cidadeEstado={props.cidadeEstado} bairro={props.bairro} dormitorio={props.dormitorio} banheiro={props.banheiro} vagas={props.vagas} areaPrivativa={props.areaPrivativa}/> 
        : 
        <BackCard aluguel={props.aluguel} condominio={props.condominio} iptu={props.iptu} areaTotal={props.areaTotal} areaPrivativa={props.areaPrivativa} sobreImovel={props.sobreImovel} />
      }
      {!details ? 
        <Button onClick={handleClick}>Detalhes</Button>
      :
        <Link to="/fale-conosco">
          <Button>Tenho interesse</Button>
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
Button {
  align-self: flex-end;
  margin: 25px 15px;
  width: 320px;
}
`;

export default CardContainer;