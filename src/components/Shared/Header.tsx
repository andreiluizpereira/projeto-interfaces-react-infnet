import { Link } from "react-router-dom";
import Logo from '../../images/Logo.svg';
import styled from 'styled-components';

export const Header = () => {

  return (
    <Header.container>
      <Link to=""><img src={Logo} alt="" /></Link>
      <nav>
        <Header.Lista>
          <li><Header.aHover href="#contato">Contato</Header.aHover></li>
          <li><Header.linkHover to="/fale-conosco">Fale conosco</Header.linkHover></li>
          <li><Header.linkDestaque to="">Alugar</Header.linkDestaque></li>
        </Header.Lista>
      </nav>
    </Header.container>
  );
}

Header.container = styled.header`
  max-width: 1280px;
  margin: auto;
  padding: 20px 0px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

Header.linkDestaque = styled(Link)`
  color: #fff;
  background-color: #4F46E5;
  padding: 10px 20px;
  border-radius: 10px;
  transition: .5s;
  &:hover {
    opacity: .8;
  }
`;

Header.Lista = styled.ul`
  display: flex;
  align-items: center;
  gap: 90px;
  font-weight: 500;
  font-size: 1.5rem;
`;

const sharedLinkStyles = `
  &:hover {
    border-bottom: 3px solid #4F46E5;
  }
  &:visited {
    color: #4F46E5;
  }
`;

Header.linkHover = styled(Link)`
  ${sharedLinkStyles};
`;

Header.aHover = styled.a`
  ${sharedLinkStyles};
`;



