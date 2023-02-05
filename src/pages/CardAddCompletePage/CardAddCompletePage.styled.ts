import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  height: 85vh;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-top: 20px;
  color: #383838;
`;

export const CardWapper = styled.form`
  margin: 20px 0;
`;

export const CompleteInput = styled.input`
  font-size: 13px;
  border: none;
  border-bottom: 1px black solid;
  width: 60%;
  text-align: center;
`;

export const CompleteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CompleteButton = styled.button`
  position: absolute;
  right: 6px;
  margin-top: 24px;
  font-size: 18px;
  background: none;
  border: none;
  color: #04c09e;
`;
