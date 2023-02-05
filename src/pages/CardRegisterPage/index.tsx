import React, { useState } from "react";
import { useNavigate } from "react-router";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Input from "../../components/Input";
import InputContainer from "../../components/InputContainer";
import Layout from "../../components/Layout";
import type {
  CardExpiration,
  CardName,
  CardNumbers,
  CardPassword,
  CardSecurityCode,
} from "../../types/common";
import { isNumber } from "../../utils/validator";
import * as S from "./CardRegisterPage.styled";

const matchKey = (i: number): keyof CardNumbers => {
  return i === 0 ? "first" : i === 1 ? "second" : i === 2 ? "third" : "fourth";
};

const CardAddPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [cardExpiration, setCardExpiration] = useState<CardExpiration>({
    month: "",
    year: "",
  });
  const [cardName, setCardName] = useState<CardName>("");
  const [securityCode, setSecurityCode] = useState<CardSecurityCode>("");
  const [password, setPassword] = useState<CardPassword>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const handleCardNumbers = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof CardNumbers,
  ): void => {
    if (!isNumber(e.target.value)) return;
    setCardNumbers({ ...cardNumbers, [key]: e.target.value });
  };

  const handleCardExpiration = (e: React.ChangeEvent<HTMLInputElement>, key: string): void => {
    const { value } = e.target;

    if (key === "month" && Number(value) > 12) return;

    setCardExpiration({ ...cardExpiration, [key]: value });
  };

  const handleCardName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCardName(e.target.value);
  };

  const handleSecurityCode = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    if (!isNumber(value)) return;

    setSecurityCode(value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>, key: string): void => {
    setPassword({ ...password, [key]: e.target.value });
  };

  const handleSubmit = (): void => {
    navigate("/add/complete", {
      state: { card: { numbers: cardNumbers, expiration: cardExpiration, name: cardName } },
    });
  };

  return (
    <Layout>
      <Header isBackButton={true} title="카드 추가" />
      <S.CardWrapper>
        <Card cardNumbers={cardNumbers} expiration={cardExpiration} name={cardName} />
      </S.CardWrapper>

      <form onSubmit={handleSubmit}>
        <InputContainer title="카드 번호">
          {Array.from({ length: 4 }).map((_, i) => (
            <>
              <Input
                key={i}
                type={i > 1 ? "password" : "text"}
                minLength={4}
                maxLength={4}
                placeholder="0000"
                value={cardNumbers[matchKey(i)]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleCardNumbers(e, matchKey(i))
                }
                required
              />
              {i < 3 && "-"}
            </>
          ))}
        </InputContainer>

        <InputContainer title="만료일">
          <Input
            placeholder="MM"
            minLength={2}
            maxLength={2}
            value={cardExpiration.month}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCardExpiration(e, "month")}
            required
          />
          /
          <Input
            placeholder="YY"
            minLength={2}
            maxLength={2}
            value={cardExpiration.year}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCardExpiration(e, "year")}
            required
          />
        </InputContainer>

        <InputContainer title="카드 소유자 이름(선택)" value={cardName.length} maxValue={15}>
          <Input
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={15}
            value={cardName}
            onChange={handleCardName}
          />
        </InputContainer>

        <InputContainer title="보안코드(CVC/CVV)">
          <Input
            type="password"
            minLength={3}
            maxLength={3}
            value={securityCode}
            onChange={handleSecurityCode}
            required
          />
        </InputContainer>

        <InputContainer title="카드 비밀번호">
          {Array.from({ length: 4 }).map((_, i) => (
            <Input
              key={i}
              width={"small"}
              type={"password"}
              minLength={1}
              maxLength={1}
              value={password[matchKey(i)]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePassword(e, matchKey(i))}
              required
            />
          ))}
        </InputContainer>
        <S.AddButtonWrapper>
          <S.AddButton>다음</S.AddButton>
        </S.AddButtonWrapper>
      </form>
    </Layout>
  );
};

export default CardAddPage;
