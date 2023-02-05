import styled from "styled-components";

export const InputWapper = styled.input`
  width: 100%;
  outline: 2px solid transparent;
  border: none;
  background: transparent;
  color: #04c09e;
`;

const Input = ({ ...props }): JSX.Element => {
  return <InputWapper {...props} />;
};

export default Input;
