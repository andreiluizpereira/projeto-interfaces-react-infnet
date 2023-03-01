import styled from "@emotion/styled";

type ButtonProps = {
  clickFunction?: () => void | undefined; 
  texto: string;
}

const Button = ({clickFunction, texto}: ButtonProps) => {
  return (
    <Layout className="hover" onClick={clickFunction}>{texto}</Layout> 
  );
}

export const Layout = styled.button`
  background: linear-gradient(90deg, #4F46E5 1.36%, #4686E5 73.48%);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 10px 20px;
  font-family: 'Roboto';
  margin: 20px 0px;
  transition: .5s;
  max-height: 50px;
  justify-items: end;
  &:hover {
    opacity: .8;
    cursor: pointer;
  }
`; 

export default Button;