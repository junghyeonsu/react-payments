import { useState } from "react";
import { useNavigate } from "react-router";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import type { LocalCard } from "../../types/common";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils/localStorage";
import * as S from "./CardListPage.styled";

const CardListPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<LocalCard[]>(
    getLocalStorageItem({
      key: "CARDS",
      defaultValue: [],
    }) as LocalCard[],
  );

  const handleRemoveCardClick = (number: number): void => {
    const newCards = cards.filter((_, i) => i !== number);
    setLocalStorageItem({
      key: "CARDS",
      item: newCards,
    });
    setCards(newCards);
  };

  const handleCardClick = ({ numbers, expiration, name }: LocalCard): void => {
    navigate("/add/complete", {
      state: { card: { numbers, expiration, name } },
    });
  };

  return (
    <Layout>
      <Header title="보유 카드" />
      <S.CardList>
        {cards.map(({ numbers, expiration, name, nickname }, i) => (
          <>
            <button key={i} onClick={() => handleRemoveCardClick(i)}>
              X
            </button>
            <S.CardWapper key={i} onClick={() => handleCardClick({ numbers, expiration, name })}>
              <Card name={name} cardNumbers={numbers} expiration={expiration} />
              <S.CardName>{nickname || "카드사"}</S.CardName>
            </S.CardWapper>
          </>
        ))}
        <S.AddButton onClick={() => navigate("/add")}>+</S.AddButton>
      </S.CardList>
    </Layout>
  );
};

export default CardListPage;
