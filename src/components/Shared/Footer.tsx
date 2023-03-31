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
          <Footer.Titulos>Contato</Footer.Titulos>
          <Footer.informacoes>
            <Footer.Icon src={telefone}/>
            <Footer.Text>(54) 99999-9999</Footer.Text>
            <Footer.Icon src={whatsapp}/>
            <Footer.Text>(54) 98888-8888</Footer.Text>
            <Footer.Icon src={email}/>
            <Footer.Text>imobiliariainfnet@gmail.com</Footer.Text>
          </Footer.informacoes>
        </Footer.contato>
        <div>
          <Footer.Titulos>Localização</Footer.Titulos>
          <Footer.informacoes>
            <Footer.Icon src={localizacao}/>
            <Footer.Text>Rua ABC, 555, Centro - Caxias do Sul/RS</Footer.Text>
          </Footer.informacoes>
        </div>
        <div>
          <Footer.Titulos>Horários</Footer.Titulos>
          <Footer.informacoes>
            <Footer.Icon src={relogio}/>
            <Footer.Text>De segunda a sexta-feira <br /> Das 08:30 às 12:00 e das 13:30 às 18:00</Footer.Text>
          </Footer.informacoes>
        </div>
        <Footer.direitos>© Imobiliária Infnet. Todos os direitos reservados.</Footer.direitos>
        <Footer.redesSociais>
          <Footer.Icon src={facebook}/>
          <Footer.Icon src={instagram}/>
          <Footer.Icon src={youtube}/>
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
`;

Footer.contato = styled.div`
  grid-row: 1/3;
`;

Footer.Titulos = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1F15C7;
`;

Footer.informacoes = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

Footer.Icon = styled.img`
  width: 40px;
  height: 40px;
`;

Footer.Text = styled.p`
  font-size: 1.1rem;
  color: inherit;
  font-weight: 400;
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