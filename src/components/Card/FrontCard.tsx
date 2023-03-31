import styled from "@emotion/styled";
import bed from '../../icons/bed.svg';
import garage from '../../icons/garage.svg';
import ruler from '../../icons/ruler.svg';
import toilet from '../../icons/toilet.svg';
import { FrontCardProps } from "../../types/PropertiesInfo";

export const FrontCard = (props : FrontCardProps) => {

  return (
    <>
      <div>
        <FrontCard.Imagem src={props.urlImage} />
        <FrontCard.Titulo>{props.bairro} - {props.cidadeEstado}</FrontCard.Titulo>
        <FrontCard.Linha />
      </div>
      <FrontCard.Info> 
          <FrontCard.Aluguel>{props.aluguel}</FrontCard.Aluguel>
          <FrontCard.Icon src={bed} width={350} height={250} />
          <FrontCard.RoomsInfo>{props.dormitorio} dormitórios</FrontCard.RoomsInfo>
          <FrontCard.Icon src={toilet}/>
          <FrontCard.RoomsInfo>{props.banheiro} banheiros</FrontCard.RoomsInfo>
          <FrontCard.Icon src={ruler}/>
          <FrontCard.RoomsInfo>{props.areaPrivativa} m²</FrontCard.RoomsInfo>
          <FrontCard.Icon src={garage}/>
          <FrontCard.RoomsInfo>{props.vagas} vagas</FrontCard.RoomsInfo>
      </FrontCard.Info>
    </>
  );
} 

FrontCard.Imagem = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 12px 12px 0px 0px;
`;

FrontCard.Titulo = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #4E5463;
  padding-top: 15px;
  padding-bottom: 10px;
  word-wrap: break-word;
`;

FrontCard.Linha = styled.hr`
  margin: 0 15px;
  border: 1px solid rgba(119, 126, 139, 0.2);
  padding: 0px;
`;

FrontCard.Info = styled.div`
  border-radius: 0px 0px 12px 12px;
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  align-items: center;
  margin-top: 20px;
  padding: 0px 30px;
  gap: 20px 10px;
  text-align: start;
  position: relative;
`;

FrontCard.Icon = styled.img`
  height: 35px;
  width: 35px;
`;

FrontCard.RoomsInfo = styled.p`
  font-size: 0.9rem;
  color: #777E8B;
`;

FrontCard.Aluguel = styled.span`
  color: #fff;
  background-color: #4F46E5;
  font-size: 1.125rem;
  border-radius: 12px;
  padding: 7px 14px;
  position: absolute;
  top: -115px;
  right: 10px;
  font-weight: bold;
`;