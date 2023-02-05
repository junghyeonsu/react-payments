import { useNavigate } from "react-router";
import styled from "styled-components";

export interface BackButtonProps {
  onClick: () => void;
}

export const BackButtonWrapper = styled.button`
  border: none;
  background: none;
`;

export const HeaderWapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin-left: 15px;
`;

export interface HeaderProps {
  isBackButton?: boolean;
  title: string;
}

const BackButton = ({ onClick }: BackButtonProps): JSX.Element => {
  return (
    <BackButtonWrapper onClick={onClick}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke="#525252" strokeWidth="2" />
      </svg>
    </BackButtonWrapper>
  );
};

const Header = ({ title, isBackButton }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <HeaderWapper>
      {isBackButton && <BackButton onClick={() => navigate("/")} />}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWapper>
  );
};

export default Header;
