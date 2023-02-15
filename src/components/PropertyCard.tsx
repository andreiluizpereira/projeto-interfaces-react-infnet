import * as React from 'react';
import styled from "@emotion/styled";
import bed from '../icons/bed.png';
import garage from '../icons/garage.png';
import ruler from '../icons/ruler.png';
import toilet from '../icons/toilet.png';
import tax from '../icons/tax.png';
import money from '../icons/money.png';

type PropertyCardProps = {
  propertyType: string;
  urlImage: string;
  aluguel: number;
  children: React.ReactNode;
  cidadeEstado: string;
  bairro: string;
  m2: number;
  dormitorio: number;
  banheiro: number;
  vagas: number;
  condominio: number;
  IPTU: number;
}

export const PropertyCard = (props : PropertyCardProps) => {

  return (
    <>
      <PropertyCard.Conteiner>
        <h2>Bairro {props.bairro}</h2>
        <p>{props.cidadeEstado}</p>
        <img src={props.urlImage} alt="" />
        <span className='aluguel'>R$ {props.aluguel}</span>
        <PropertyCard.Info> 
          <img src={bed} alt="" />
          <p><span>Dormitórios:</span> {props.dormitorio}</p>
          <img src={toilet} alt="" />
          <p><span>Banheiros:</span> {props.banheiro}</p>
          <img src={ruler} alt="" />
          <p><span>Área:</span> {props.m2} m²</p>
          <img src={garage} alt="" />
          <p><span>Vagas:</span> {props.vagas}</p>
          <img src={money} alt="" />
          <p><span>Condomínio:</span> R$ {props.condominio}</p>
          <img src={tax} alt="" />
          <p><span>IPTU:</span> R$ {props.IPTU}</p>
        </PropertyCard.Info>
      </PropertyCard.Conteiner>
    </>
  );
} 
/*
export const PropertyInfoCard = (props : PropertyInfoCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Imóvel"
        height="140"
        image={props.urlImage}
        title="Imóvel"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bairro {props.bairro}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p>{props.propertyType}</p>
          <PropertyInfoCard.Grid> 
            <p><span>Local:</span> {props.cidadeEstado}</p>
            <p><span>m²:</span> {props.m2}</p>
            <p><span>Dormitórios:</span> {props.dormitorio}</p>
            <p><span>Vagas garagem:</span> {props.vagasGaragem}</p>
            <p><span>Condomínio:</span> R$ {props.condominio}</p>
            <p><span>IPTU:</span> R$ {props.IPTU}</p>
          </PropertyInfoCard.Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
}*/
PropertyCard.Conteiner = styled.div`
  margin-top: 500px;
  max-width: 350px;
  border-radius: 7px;
  background-color: #f7f7f7;
  border: 2px solid #dfdfdf;
  margin: auto;
  position: relative;
  h2, >p {
    background-image: radial-gradient(circle at 15.59% 50%, #0092fd 0, #008ffe 12.5%, #008bfe 25%, #0087fc 37.5%, #4682f9 50%, #677df5 62.5%, #7f78ef 75%, #9372e8 87.5%, #a56ce1 100%);
    color: #f7f7f7;
  }
  h2 {
    padding: 5px 10px;
    border-radius: 7px 7px 0 0;
  }
  >p {
    font-size: 0.8rem;
    padding-bottom: 5px;
  }
  .aluguel {
    position: absolute;
    top: 255px;
    right: 10px;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 7px;
    font-weight: bold;
  }
`;

PropertyCard.Info = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 10px 10px;
  text-align: start;
  p {
    font-size: 0.85rem;
  }
  span {
    font-weight: bold;
  }
  img {
    height: 25px;
    width: 25px;
  }
`;