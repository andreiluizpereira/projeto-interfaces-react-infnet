import { CardImovel } from "../components/CardImovel"
import Apartamento1 from '../images/ap1.jpg';
import Apartamento2 from '../images/ap2.jpg';
import Apartamento3 from '../images/ap3.jpg';
import Apartamento4 from '../images/ap4.jpg';
import Apartamento5 from '../images/ap5.jpg';
import Apartamento6 from '../images/ap6.jpg';
import styled from 'styled-components';

const Alugar = () => {
  return (
    <>
      <Alugar.Titulo>
        <span>Alugue</span> um imóvel.
      </Alugar.Titulo>
      <Alugar.Layout>

        <CardImovel urlImage={Apartamento1} aluguel={1250} cidadeEstado='Caxias do Sul/RS' bairro={'Exposição'} m2={72} dormitorio={2} banheiro={2} vagas={2} condominio={250} iptu={800} areaTotal={128} areaPrivativa={116} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>

        <CardImovel urlImage={Apartamento2} aluguel={2250} cidadeEstado='Caxias do Sul/RS' bairro={'Panazzolo'} m2={214} dormitorio={4} banheiro={3} vagas={3} condominio={250} iptu={800} areaTotal={128} areaPrivativa={116} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

        <CardImovel urlImage={Apartamento3} aluguel={1550} cidadeEstado='Bento Gonçalves/RS' bairro={'Centro'} m2={158} dormitorio={3} banheiro={2} vagas={2} condominio={250} iptu={800} areaTotal={128} areaPrivativa={116} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

        <CardImovel urlImage={Apartamento4} aluguel={1080} cidadeEstado='Caxias do Sul/RS' bairro={'São Pelegrino'} m2={54} dormitorio={1} banheiro={1} vagas={1} condominio={250} iptu={800} areaTotal={128} areaPrivativa={116} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

        <CardImovel urlImage={Apartamento5} aluguel={1500} cidadeEstado='Caxias do Sul/RS' bairro={'Centro'} m2={91} dormitorio={2} banheiro={1} vagas={2} condominio={250} iptu={800} areaTotal={128} areaPrivativa={116} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

        <CardImovel urlImage={Apartamento6} aluguel={1480} cidadeEstado='Caxias do Sul/RS' bairro={'Cristo Redentor'} m2={85} dormitorio={2} banheiro={1} vagas={1} condominio={250} iptu={800} areaTotal={128} areaPrivativa={116} sobreImovel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        
      </Alugar.Layout>
    </>
  )
}

Alugar.Titulo = styled.h2`
  max-width: 1280px;
  margin: auto;
  text-align: center;
  margin-bottom: 60px;
  font-size: 4rem;
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