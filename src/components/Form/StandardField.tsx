import styled from "@emotion/styled";
import { ReactNode } from 'react';
import { Label, Input } from "./Common";

const StandardField = ({children, type, id, placeholder}: StandardFieldProps) => {

  return (
    <StandardField.Container>
      <Label htmlFor={id}>{children}</Label>
      <Input type={type} name={id} id={id} placeholder={placeholder} />
    </StandardField.Container>
  );
}

type StandardFieldProps = {
  type: string;
  id: string;
  placeholder?: string;
  children: ReactNode;
}

StandardField.Container = styled.div`
  display: grid;
`;

export default StandardField;