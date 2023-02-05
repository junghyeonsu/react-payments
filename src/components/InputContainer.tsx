import type { PropsWithChildren } from "react";
import styled from "styled-components";

export interface Props {
  title?: string;
  value?: number;
  maxValue?: number;
}

export const InputContainerWapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin: 20px 0 10px 0;
`;

export const LabelWapper = styled.div`
  display: flex;
  align-items: left;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #525252;
`;

export const InputWapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  text-align-last: center;
  width: 50%;
  height: 40px;
  border: none;
  background: #ecebf1;
  border-radius: 7px;
  text-align: left;
  padding: 0 12px;
  margin-right: auto;
`;

const InputContainer = ({
  title,
  children,
  value,
  maxValue,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <InputContainerWapper>
      <LabelWapper>
        <Label>{title}</Label>
        {maxValue && (
          <span>
            {value} / {maxValue}
          </span>
        )}
      </LabelWapper>
      <InputWapper>{children}</InputWapper>
    </InputContainerWapper>
  );
};

export default InputContainer;
