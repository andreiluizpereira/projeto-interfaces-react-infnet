import styled from "styled-components";
import { BackCardProps } from "../../types/PropertiesInfo";

export const BackCard = (props : BackCardProps) => {
  return (
    <BackCard.Info>
      <p>Aluguel <span>R$ {props.aluguel}</span></p>
      <p>Condomínio <span>R$ {props.condominio}</span></p>
      <p>IPTU <span>R$ {props.iptu}</span></p>
      <div className="detalhe"></div>
      <h3>Sobre o imóvel</h3>
      <p className="sobre-imovel">{props.sobreImovel}</p>
    </BackCard.Info>
  );
}

BackCard.Info = styled.div`
  gap: 10px;
  padding: 15px;
  min-height: 398px;
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
    margin-top: 20px;
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
    margin-top: 7px;
  }
  
`;