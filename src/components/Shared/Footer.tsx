import styled from "@emotion/styled";
import telefone from "../../icons/telefone.svg";
import whatsapp from "../../icons/whatsapp.svg";
import email from "../../icons/email.svg";
import localizacao from "../../icons/localizacao.svg";
import relogio from "../../icons/relogio.svg";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
import youtube from "../../icons/youtube.svg";

export const Footer = () => {
  return (
    <Footer.container>
      <Footer.container_interno id="contato">
        <Footer.contato>
          <h3>Contato</h3>
          <Footer.informacoes>
            <img src={telefone}/>
            <p>(54) 99999-9999</p>
            <img src={whatsapp}/>
            <p>(54) 98888-8888</p>
            <img src={email}/>
            <a href="mailto:imobiliariainfnet@gmail.com">imobiliariainfnet@gmail.com</a>
          </Footer.informacoes>
        </Footer.contato>
        <div>
          <h3>Localização</h3>
          <Footer.informacoes>
            <img src={localizacao}/>
            <p>Rua ABC, 555, Centro - Caxias do Sul/RS</p>
          </Footer.informacoes>
        </div>
        <div>
          <h3>Horários</h3>
          <Footer.informacoes>
            <img src={relogio}/>
            <p>De segunda a sexta-feira <br /> Das 08:30 às 12:00 e das 13:30 às 18:00</p>
          </Footer.informacoes>
        </div>
        <Footer.direitos>© Imobiliária Infnet. Todos os direitos reservados.</Footer.direitos>
        <Footer.redesSociais>
          <img src={facebook}/>
          <img src={instagram}/>
          <img src={youtube}/>
        </Footer.redesSociais>
      </Footer.container_interno>
    </Footer.container>
  );
}

Footer.container = styled.div`
  background: linear-gradient(90deg, #4F46E5 0%, #4686E5 96.26%);
`;

Footer.container_interno = styled.footer`
  max-width: 1280px;
  margin: auto;
  padding: 60px 0px;
  color: #fff;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px 0px;
  img {
    width: 40px;
    height: 40px;
  }
  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #1F15C7;
  }
  a, p {
    font-size: 1.1rem;
    color: inherit;
    font-weight: 400;
  }
`;

Footer.informacoes = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

Footer.contato = styled.div`
  grid-row: 1/3;
`;

Footer.direitos = styled.p`
  margin-top: 80px;
  align-self: center;
`;

Footer.redesSociais = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  gap: 60px;
  transition: .5s;
  img:hover {
    opacity: .8;
    cursor: pointer;
  }
`;