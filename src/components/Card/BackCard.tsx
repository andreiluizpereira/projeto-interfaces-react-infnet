import styled from "styled-components";
import check from '../../icons/check.svg';

// FrontCard e BackCard precisam de contexto, para que  a page Alugar.tsx possa passar as props necessárias

type BackCardProps = {
  aluguel: number;
  condominio: number;
  iptu: number;
  areaTotal: number;
  areaPrivativa: number;
  sobreImovel: string;
}

export const BackCard = (props : BackCardProps) => {
  return (
    <BackCard.Info>
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
    </BackCard.Info>
  );
}

BackCard.Info = styled.div`
  gap: 10px;
  padding: 15px;
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