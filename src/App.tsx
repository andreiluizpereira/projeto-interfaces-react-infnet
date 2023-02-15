import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PropertyCard } from './components/PropertyCard';
import Apartamento1 from './images/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <Header />
      <PropertyCard propertyType='Apartamento Residencial' urlImage={Apartamento1} aluguel={1250} cidadeEstado='Caxias do Sul/RS' bairro={'Panazzolo'} m2={72} dormitorio={2} banheiro={2} vagas={2} condominio={250} IPTU={750}>
        <img src="" alt="" />
      </PropertyCard>
      <Footer />
    </div>
  );
}

export default App;
