import styled from "styled-components";

export const TextArea = ({name, value, onChangeFunction}: TextAreaFieldProps) => {

  return (
    <TextArea.TextArea name={name} id={name} value={value} onChange={onChangeFunction}/>
  );
}

type TextAreaFieldProps = {
  name: string;
  value?: string | number;
  onChangeFunction?: (event: any) => void;
}

TextArea.TextArea = styled.textarea`
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