import styled from 'styled-components';
import anexo from '../icons/anexo.svg';

const Anunciar = () => {
  return (
    <> 
      <Anunciar.Titulo>
        <span>Anuncie</span> seu imóvel.
      </Anunciar.Titulo>
      <Anunciar.Formulario>
        <div>
          <label htmlFor="estado">Estado</label>
          <input type="text" id='estado'/>
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id='cidade'/>
        </div>
        <div className='full'>
          <label htmlFor="bairro">Bairro</label>
          <input type="text" id='bairro'/>
        </div>
        <div>
          <label htmlFor="dormitorios">Dormitórios</label>
          <input type="number" id='dormitorios'/>
        </div>
        <div>
          <label htmlFor="banheiros">Banheiros</label>
          <input type="number" id='banheiros'/>
        </div>
        <div>
          <label htmlFor="area-total">Área total</label>
          <input type="number" id='area-total' placeholder='m²'/>
        </div>
        <div>
          <label htmlFor="area-privativa">Área privativa</label>
          <input type="number" id='area-privativa' placeholder='m²'/>
        </div>
        <div>
          <label htmlFor="vagas">Vagas</label>
          <input type="number" id='vagsa'/>
        </div>
        <div>
          <label htmlFor="condominio">Condomínio</label>
          <input type="number" id='condominio' placeholder='R$ 0,00'/>
        </div>
        <div>
          <label htmlFor="iptu">IPTU</label>
          <input type="number" id='iptu' placeholder='R$ 0,00'/>
        </div>
        <div>
          <label htmlFor="aluguel">Aluguel</label>
          <input type="number" id='aluguel' placeholder='R$ 0,00'/>
        </div>
        <div className='full'>
          <label htmlFor="imagem">Imagem</label>
          <div className='file'>
            <label htmlFor="imagem">Escolher arquivo</label>
            <img src={anexo}/>
          </div>
          <input type="file" name="imagem" id="imagem" />
        </div>
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
        <div className='sobre-imovel full'>
          <label htmlFor="sobre-imovel">Sobre o Imóvel</label>
          <textarea name="sobre-imovel" id="sobre-imovel" cols={30} rows={30}></textarea>
        </div>
        <button className='full'>Anunciar</button>
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
  max-width: 950px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 60px;
  border-radius: 7px;
  padding: 20px;
  margin-bottom: 100px;
  div {
    display: grid;
  }
  label {
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.06rem;
    letter-spacing: 0.095em;
    color: #6A717E;
  }
  input[type="file"] {
    display: none;
  }
  input[type="radio"] {
    width: 25px;
  }
  .full {
    grid-column: 1/-1;
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
  input, .adicionais, .file, textarea {
    padding: 5px 20px;
    height: 40px;
    opacity: 0.6;
    border: 4px solid #E0E3E7;
    border-radius: 15px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #777E8B;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .file label, .adicionais label {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.75rem;
  } 
  textarea {
    height: 120px;
  }
  .file img {
    transform: rotate(45deg);
    height: 35px;
    width: 35px;
  }
  button {
    height: 80px;
    border-radius: 15px;
    border: none;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 2.7rem;
    color: #FFFFFF;
    background: linear-gradient(90deg, #4F46E5 0%, #4686E5 96.26%);
    transition: .5s;
    margin-top: 60px;
  }
  button:hover {
    opacity: .8;
    cursor: pointer;
  } 
`;

export default Anunciar;