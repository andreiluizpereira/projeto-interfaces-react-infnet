import styled from "@emotion/styled";

const Button = ({clickFunction, submitFunction, texto, type='submit'}: ButtonProps) => {
  return (
    <Button.button value={texto} type={type} onClick={clickFunction} onSubmit={submitFunction}>{texto}</Button.button> 
  );
}

type ButtonProps = {
  clickFunction?: () => void | undefined; 
  submitFunction?: (e: any) => void | undefined;
  texto: string;
  type?: "submit" | "button" | "reset" | undefined;
}

Button.button = styled.button`
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