import { ReactNode } from "react";
import styled from "styled-components";

export const Label = ({htmlFor, children}: LabelProps) => {
  return (
    <Label.label htmlFor={htmlFor}>{children}</Label.label>
  );
}

type LabelProps = {
  htmlFor: string;
  children: ReactNode;
}

Label.label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.8rem;
  letter-spacing: 0.095em;
  color: #6A717E;
`;


export const Input = ({type, name, id, placeholder} : InputProps) => {
  return (
    <Input.Input type={type} name={name} id={id} placeholder={placeholder} />
  );
}

type InputProps = {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
}

Input.Input = styled.input`
  padding: 5px 10px;
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
`;