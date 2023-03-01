import styled from 'styled-components';
import Button from '../components/Button';
import StandardField from '../components/Form/StandardField';
import { ImageField } from '../components/Form/ImageField';
import { TextAreaField } from '../components/Form/TextAreaField';

type FormContextType = {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
}

const Anunciar = () => {

  const insertProperty = () => {

  }

  return (
    <> 
      <Anunciar.Titulo>
        <span>Anuncie</span> seu imóvel.
      </Anunciar.Titulo>
      <Anunciar.Formulario>
          <StandardField id='estado' type='text'>Estado</StandardField>
          <StandardField id='cidade' type='text'>Cidade</StandardField>
          <div className='full'><StandardField id='bairro' type='text'>Bairro</StandardField></div>
          <StandardField id='dormitorios' type='text'>Dormitórios</StandardField>
          <StandardField id='banheiros' type='text'>Banheiros</StandardField>
          <StandardField id='vagas' type='text'>Vagas</StandardField>
          <StandardField id='area-total' type='text' placeholder='m²'>Área total</StandardField>
          <StandardField id='area-privativa' type='text' placeholder='m²'>Área privativa</StandardField>
          <StandardField id='condominio' type='text' placeholder='R$ 0,00'>Condomínio</StandardField>
          <StandardField id='iptu' type='text' placeholder='R$ 0,00'>IPTU</StandardField>
          <StandardField id='aluguel' type='text' placeholder='R$ 0,00'>Aluguel</StandardField>
          <div className='full'><ImageField id='image' type='file'>Imagem</ImageField></div>

          <TextAreaField name='sobre-imovel'>Sobre o imóvel</TextAreaField>
          
        
            <div className='full'>
              <label>Adicionais</label>
              <div className='adicionais'>
                <div>
                  <input type="radio" name="sacada" id='sacada'/>
                  <label htmlFor="sacada">Sacada</label>    
                </div>     
                <div>
                  <input type="radio" name="churrasqueira" id='churrasqueira'/>
                  <label htmlFor="churrasqueira">Churrasqueira</label>
                </div>
                <div>
                  <input type="radio" name="mobiliado" id='mobiliado'/>
                  <label htmlFor="mobiliado">Mobiliado</label>
                </div>
              </div>
            </div>
            <Button texto="Anunciar" clickFunction={insertProperty} />
      </Anunciar.Formulario>
    </>
  );
}

Anunciar.Titulo = styled.h2`
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

Anunciar.Formulario = styled.form`
  background-color: transparent;
  border: none;
  max-width: 800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
  border-radius: 7px;
  padding: 20px;
  margin-bottom: 100px;

  .full {
    grid-column: 1/-1;
  }
  
  input[type="radio"] {
    width: 15px;
  }
  
  .adicionais {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
  }
  .adicionais div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .adicionais {
    padding: 5px 20px;
    height: 30px;
    opacity: 0.6;
    border: 3px solid #E0E3E7;
    border-radius: 10px;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.75rem;
    color: #777E8B;
    display: flex;
    gap: 10px;
    align-items: center;
  }
.adicionais label {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.75rem;
  }
  Button {
    grid-column: 1/-1;
  }
`;

export default Anunciar;