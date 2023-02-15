import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import { PropertyCard } from "../components/PropertyCard"
import Apartamento1 from '../images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg';

const OfferYourProperty = () => {
  return (
    <>
      <PageTitle title='Ofereça seu imóvel'/>
      <PropertyCard urlImage={Apartamento1} aluguel={1250} cidadeEstado='Caxias do Sul/RS' bairro={'Panazzolo'} m2={72} dormitorio={2} banheiro={2} vagas={2} condominio={250} IPTU={750} />
    </>
  )
}

export default OfferYourProperty