import styled from 'styled-components';
import CardContainer from '../components/Card/CardContainer';
import Apartamento1 from '../images/ap1.jpg';
import Apartamento2 from '../images/ap2.jpg';
import Apartamento3 from '../images/ap3.jpg';
import Apartamento4 from '../images/ap4.jpg';
import Apartamento5 from '../images/ap5.jpg';
import Apartamento6 from '../images/ap6.jpg';

const Alugar = () => {

  return (
    <>
      <Alugar.Titulo>
        <span>Alugue</span> um imóvel.
      </Alugar.Titulo>
      <Alugar.Layout>
        <CardContainer aluguel={1250} areaPrivativa={86} areaTotal={102} bairro="Panazzolo" cidadeEstado='Caxias do Sul/RS' banheiro={2} condominio={250} iptu={850} dormitorio={3} urlImage={Apartamento1} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." vagas={2} />
        
        <CardContainer aluguel={1300} areaPrivativa={96} areaTotal={112} bairro="Cristo Redentor" cidadeEstado='Caxias do Sul/RS' banheiro={2} condominio={320} iptu={900} dormitorio={3} urlImage={Apartamento2} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." vagas={2} />

        <CardContainer aluguel={859} areaPrivativa={66} areaTotal={91} bairro="Centro" cidadeEstado='Bento Gonçalves/RS' banheiro={1} condominio={200} iptu={570} dormitorio={2} urlImage={Apartamento3} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." vagas={1} />

        <CardContainer aluguel={2500} areaPrivativa={130} areaTotal={150} bairro="Exposição" cidadeEstado='Caxias do Sul/RS' banheiro={3} condominio={550} iptu={1350} dormitorio={4} urlImage={Apartamento4} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." vagas={3} />

        <CardContainer aluguel={700} areaPrivativa={50} areaTotal={62} bairro="Cruzeiro" cidadeEstado='Caxias do Sul/RS' banheiro={1} condominio={200} iptu={650} dormitorio={2} urlImage={Apartamento5} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." vagas={1} />

        <CardContainer aluguel={1180} areaPrivativa={70} areaTotal={84} bairro="Bela Vista" cidadeEstado='Caxias do Sul/RS' banheiro={1} condominio={180} iptu={625} dormitorio={2} urlImage={Apartamento6} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." vagas={1} />       
      </Alugar.Layout>
    </>
  )
}

Alugar.Titulo = styled.h2`
  max-width: 1280px;
  margin: auto;
  text-align: center;
  margin-bottom: 60px;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 4.68rem;
  letter-spacing: 0.095em;
  color: #47505F;
  span {
    color: #4F46E5;
  }
`;

Alugar.Layout = styled.main`
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
  gap: 40px;
  justify-content: center;
  padding-bottom: 80px;
`;

export default Alugar;