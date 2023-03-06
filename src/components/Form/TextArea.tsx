import styled from "styled-components";

export const TextArea = ({name}: TextAreaFieldProps) => {

  return (
    <TextArea.TextArea name={name} id={name}/>
  );
}

type TextAreaFieldProps = {
  name: string;
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