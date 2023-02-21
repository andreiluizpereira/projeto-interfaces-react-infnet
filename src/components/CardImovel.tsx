import styled from "@emotion/styled";
import bed from '../icons/bed.svg';
import garage from '../icons/garage.svg';
import ruler from '../icons/ruler.svg';
import toilet from '../icons/toilet.svg';
import check from '../icons/check.svg';
import { useState } from "react";

type CardImovelProps = {
  urlImage: string;
  aluguel: number;
  cidadeEstado: string;
  bairro: string;
  dormitorio: number;
  banheiro: number;
  m2: number;
  vagas: number;
  condominio: number;
  iptu: number;
  areaTotal: number;
  areaPrivativa: number;
  sobreImovel: string;
}

export const CardImovel = (props : CardImovelProps) => {

  const [displayFront, setDisplayFront] = useState("displayRelative");
  const [displayBack, setDisplayBack] = useState("displayNone");

  const trocarDisplay = () => {
    setDisplayFront("displayNone");
    setDisplayBack("displayGrid");
  }

  return (
    <>
      <CardImovel.Conteiner>
        <CardImovel.Info1>
          <div id={displayFront}>
            <img src={props.urlImage} alt="" />
            <h2>{props.bairro} - {props.cidadeEstado}</h2>
            <hr />
          </div>
        </CardImovel.Info1>
        <CardImovel.Info2> 
          <div className="informacoes" id={displayFront}>
            <span className='aluguel'>{props.aluguel}</span>
            <img src={bed} alt="Foto imóvel" width={350} height={250} />
            <p>{props.dormitorio} dormitórios</p>
            <img src={toilet}/>
            <p>{props.banheiro} banheiros</p>
            <img src={ruler}/>
            <p>{props.m2} m²</p>
            <img src={garage}/>
            <p>{props.vagas} vagas</p>
            <button onClick={trocarDisplay}>Detalhes</button>
          </div>
        </CardImovel.Info2>
        <CardImovel.Info3>
          <div id={displayBack}>
            <p>Aluguel <span>R$ {props.aluguel}</span></p>
            <p>Condomínio <span>R$ {props.condominio}</span></p>
            <p>IPTU <span>R$ {props.iptu}</span></p>
            <div className="detalhe"></div>
            <div>
              <img src={check} alt="" />
              <p>Área total: {props.areaTotal}m²</p>
            </div>
            <div>
              <img src={check} alt="" />
              <p>Área privativa: {props.areaPrivativa}m²</p>
            </div>
            <div className="sacada">
              <img src={check} alt="" />
              <p>Sacada</p>
            </div>
            <div className="churrasqueira">
              <img src={check} alt="" />
              <p>Churrasqueira</p>
            </div>
            <div className="mobiliado">
              <img src={check} alt="" />
              <p>Mobiliado</p>
            </div>
            <h3>Sobre o imóvel</h3>
            <p className="sobre-imovel">{props.sobreImovel}</p>
            <button>Tenho interesse</button>
          </div>
        </CardImovel.Info3>
      </CardImovel.Conteiner>
    </>
  );
} 

CardImovel.Conteiner = styled.div`
  max-width: 350px;
  height: 100%;
  text-align: center;
  border-radius: 12px;
  box-shadow: 3px 3px 12px 3px rgba(0, 0, 0, 0.25);
`;
CardImovel.Info1 = styled.div`
  #displayRelative {
    display: relative;
  }
  #displayNone {
    display: none;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #4E5463;
    padding-top: 15px;
    padding-bottom: 10px;
    word-wrap: break-word;
  }
  hr {
    width: 294px;
    border: 1px solid rgba(119, 126, 139, 0.2);
    padding: 0px;
  }
  img {
    width: 350px;
    height: 250px;
    border-radius: 12px 12px 0px 0px;
  } 
`;

CardImovel.Info2 = styled.div`
  #displayRelative {
    display: relative;
  }
  #displayNone {
    display: none;
  }
  .informacoes {
    border-radius: 0px 0px 12px 12px;
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    align-items: center;
    margin-top: 20px;
    padding: 0px 30px;
    gap: 20px 10px;
    text-align: start;
    position: relative;
  }
  .aluguel {
    color: #fff;
    background-color: #4F46E5;
    font-size: 1.125rem;
    border-radius: 12px;
    padding: 7px 14px;
    position: absolute;
    top: -125px;
    right: 10px;
    font-weight: bold;
  }
  img {
    height: 35px;
    width: 35px;
  }
  p {
    font-size: 0.9rem;
    color: #777E8B;
  }
  button {
    grid-column: 1/-1;
    background: linear-gradient(90deg, #4F46E5 1.36%, #4686E5 73.48%);
    border: none;
    border-radius: 12px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 10px 20px;
    font-family: 'Roboto';
    margin-top: 20px;
    transition: .5s;
  }
  button:hover {
    opacity: .8;
  }
`;

CardImovel.Info3 = styled.div`
  gap: 10px;
  padding: 15px;
  #displayNone {
    display: none;
  }
  #displayGrid {
    display: grid;
  }
  p {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.18rem;
    color: #4E5463;
  }
  .detalhe {
    border: 1px solid rgba(119, 126, 139, 0.2);
    margin: 15px 0px
  }
  span, h3 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.18rem;
    color: #4F46E5;
  }
  h3 {
    text-align: start;
    margin-top: 15px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  div img {
    width: 24px;
    height: 24px;
  }
  div p {
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: #777E8B;
  }
  .sobre-imovel {
    text-align: start;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.12rem;
    color: #777E8B;
  }
  button {
    background: linear-gradient(90deg, #4F46E5 1.36%, #4686E5 73.48%);
    border: none;
    border-radius: 12px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 10px 20px;
    font-family: 'Roboto';
    margin-top: 20px;
    transition: .5s;
  }
  button:hover {
    opacity: .8;
  }
`;
