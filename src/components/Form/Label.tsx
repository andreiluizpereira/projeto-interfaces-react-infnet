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