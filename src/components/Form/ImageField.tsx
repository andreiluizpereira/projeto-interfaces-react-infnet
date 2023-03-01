import styled from "styled-components";
import { Label, Input } from "./Common";
import AtacchmentIcon from "../../icons/anexo.svg";
import { ReactNode } from "react";

export const ImageField = ({children, type, id}: ImageFieldProps) => {

  return (
    <ImageField.Container>
      <Label htmlFor={id}>{children}</Label>
      <div>
        <label className="placeHolder" htmlFor={id}>Escolher arquivo <span>(Min: 350x250)</span></label>
        <img src={AtacchmentIcon} />
      </div>
      <Input type={type} name={id} id={id} />
    </ImageField.Container>
  );
}

type ImageFieldProps = {
  type: string;
  id: string;
  placeholder?: string;
  children: ReactNode;
}

ImageField.Container = styled.div`
  div {
    padding: 5px 20px;
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
  }
  .placeHolder {
    margin-left: -10px;
  }
  img {
    transform: rotate(45deg);
    height: 35px;
    width: 35px;
  }
  input {
    display: none;
  }
  span {
    font-size: 1rem;
  }
`;