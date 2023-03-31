import styled from "styled-components";
import { BackCardProps } from "../../types/PropertiesInfo";

export const BackCard = (props : BackCardProps) => {
  return (
    <BackCard.Conteiner>
      <BackCard.Info>Aluguel <span>R$ {props.aluguel}</span></BackCard.Info>
      <BackCard.Info>Condomínio <span>R$ {props.condominio}</span></BackCard.Info>
      <BackCard.Info>IPTU <span>R$ {props.iptu}</span></BackCard.Info>
      <BackCard.linha />
      <BackCard.sobreImovelTitulo>Sobre o imóvel</BackCard.sobreImovelTitulo>
      <BackCard.sobreImovel>{props.sobreImovel}</BackCard.sobreImovel>
    </BackCard.Conteiner>
  );
}

BackCard.Conteiner = styled.div`
  gap: 10px;
  padding: 15px;
  min-height: 398px;
`;

BackCard.Info = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.18rem;
  color: #4E5463;
  span {
    color: #4F46E5;
    font-weight: 500;
  }
`;

BackCard.linha = styled.div`
  border: 1px solid rgba(119, 126, 139, 0.2);
  margin: 15px 0px;
`;

BackCard.sobreImovelTitulo = styled.h3`
  text-align: start;
  margin-top: 20px;
  color: #4F46E5;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.18rem;
`;

BackCard.sobreImovel = styled.p`
  text-align: start;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.18rem;
  color: #777E8B;
  margin-top: 7px;
`;