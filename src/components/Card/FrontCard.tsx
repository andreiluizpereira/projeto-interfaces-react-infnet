import styled from "@emotion/styled";
import bed from '../../icons/bed.svg';
import garage from '../../icons/garage.svg';
import ruler from '../../icons/ruler.svg';
import toilet from '../../icons/toilet.svg';

type FrontCardProps = {
  urlImage: string;
  aluguel: number;
  cidadeEstado: string;
  bairro: string;
  dormitorio: number;
  banheiro: number;
  m2: number;
  vagas: number;
  areaPrivativa: number;
}

// FrontCard e BackCard precisam de contexto, para que  a page Alugar.tsx possa passar as props necessárias

export const FrontCard = (props : FrontCardProps) => {

  return (
    <>
      <FrontCard.Info1>
        <div>
          <img src={props.urlImage} alt="" />
          <h2>{props.bairro} - {props.cidadeEstado}</h2>
          <hr />
        </div>
      </FrontCard.Info1>
      <FrontCard.Info2> 
          <span className='aluguel'>{props.aluguel}</span>
          <img src={bed} alt="Foto imóvel" width={350} height={250} />
          <p>{props.dormitorio} dormitórios</p>
          <img src={toilet}/>
          <p>{props.banheiro} banheiros</p>
          <img src={ruler}/>
          <p>{props.m2} m²</p>
          <img src={garage}/>
          <p>{props.vagas} vagas</p>
      </FrontCard.Info2>
    </>
  );
} 

FrontCard.Info1 = styled.div`
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

FrontCard.Info2 = styled.div`
  border-radius: 0px 0px 12px 12px;
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  align-items: center;
  margin-top: 20px;
  padding: 0px 30px;
  gap: 20px 10px;
  text-align: start;
  position: relative;

  .aluguel {
    color: #fff;
    background-color: #4F46E5;
    font-size: 1.125rem;
    border-radius: 12px;
    padding: 7px 14px;
    position: absolute;
    top: -130px;
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
`;