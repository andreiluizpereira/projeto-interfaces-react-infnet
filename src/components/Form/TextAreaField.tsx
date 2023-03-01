import styled from "styled-components";
import { ReactNode } from "react";
import { Label, Input } from "./Common";

export const TextAreaField = ({name, children}: TextAreaFieldProps) => {

  return (
    <TextAreaField.Container>
      <Label htmlFor={name}>{children}</Label>
      <TextAreaField.TextArea name={name} id={name}/>
    </TextAreaField.Container>
  );
}

type TextAreaFieldProps = {
  name: string;
  children: ReactNode;
}

TextAreaField.Container = styled.div`
  display: grid;
  grid-column: 1/-1;
`;

TextAreaField.TextArea = styled.textarea`
  padding: 5px 10px;
  height: 100px;
  opacity: 0.6;
  border: 3px solid #E0E3E7;
  border-radius: 10px;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.75rem;
  color: #777E8B;
  align-items: center;
`;