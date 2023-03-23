import styled from "styled-components";

const inputSharedStyles = `
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #4E4AE5;
`;

export const Input = styled.input`
  background: #FFFFFF;
  border-radius: 9px;
  border: none;
  padding: 5px 7px;
  height: 39px;
  margin-bottom: 20px;
  ${inputSharedStyles};
  &::placeholder {
    ${inputSharedStyles};
  }
`;