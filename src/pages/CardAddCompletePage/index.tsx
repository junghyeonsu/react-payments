import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Card from "../../components/Card";
import Layout from "../../components/Layout";
import type { LocalCard } from "../../types/common";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils/localStorage";
import * as S from "./CardAddCompletePage.styled";
import type { CardType } from "./CardAddCompletePage.type";

const CardAddCompletePage = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    state: { card },
  } = useLocation() as { state: { card: CardType } };
  const { numbers, expiration, name } = card;

  const [nickname, setNickname] = useState<string>("");

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNickname(e.target.value);
  };

  const handleSubmit = (): void => {
    const localCards = getLocalStorageItem({
      key: "CARDS",
      defaultValue: [],
    }) as LocalCard[];

    setLocalStorageItem({
      key: "CARDS",
      item: [...localCards, { ...card, nickname }],
    });
    navigate("/");
  };

  return (
    <Layout>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>카드 등록이 완료되었습니다.</S.Title>
        <S.CardWapper>
          <Card size="large" cardNumbers={numbers} expiration={expiration} name={name} />
        </S.CardWapper>
        <S.CompleteInput
          type="text"
          placeholder="카드 별칭 (선택)"
          minLength={1}
          maxLength={15}
          value={nickname}
          onChange={handleNickname}
        />
        <S.CompleteButtonWrapper>
          <S.CompleteButton>완료</S.CompleteButton>
        </S.CompleteButtonWrapper>
      </S.Form>
    </Layout>
  );
};

export default CardAddCompletePage;
