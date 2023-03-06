import styled from "styled-components";

export const Input = ({type, name, id, placeholder, value, onChangeFunction} : InputProps) => {
  return (
    <Input.Input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChangeFunction} />
  );
}

type InputProps = {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  value?: string | number;
  onChangeFunction?: (event: any) => void;
  textColor?: string;
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