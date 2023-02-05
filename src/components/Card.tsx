import styled from "styled-components";

import type { CardCompany, CardExpiration, CardName, CardNumbers } from "../types/common";

export interface Props {
  size?: "default" | "small" | "large";
  name?: CardName;
  expiration?: CardExpiration;
  cardCompany?: CardCompany;
  cardNumbers?: CardNumbers;
}

export const CardWapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 133px;
  width: 213px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  background: #d2d2d2;
  border-radius: 5px;
`;

export const CompanyName = styled.span`
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 25px;
  color: #383838;
  font-size: 12px;
`;

export const SecurityTicket = styled.div`
  position: absolute;
  width: 40px;
  height: 26px;
  left: 25px;
  top: 50px;
  background: #cbba64;
  border-radius: 4px;
`;

export const CardNumber = styled.div`
  display: flex;
  position: absolute;
  top: 88px;
  gap: 9.5px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 4px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 110px;
  align-items: center;
  gap: 105px;
  font-size: 12px;
  font-weight: 700;
`;

const Card = ({
  size = "default",
  cardNumbers = {
    first: "3213",
    second: "1321",
    third: "1111",
    fourth: "1111",
  },
  expiration = {
    month: "MM",
    year: "YY",
  },
  name = "NAME",
  cardCompany = {
    name: "",
    color: "",
  },
}: Props) => {
  const sizeTable = {
    default: "w-213 h-133",
    small: "w-208 h-130",
    large: "w-293 h-183",
  };

  const heightTable = {
    default: "h-5",
    small: "h-5",
    large: "h-10",
  };

  const matchKey = (i: number): keyof CardNumbers => {
    return i === 0 ? "first" : i === 1 ? "second" : i === 2 ? "third" : "fourth";
  };

  const changeSecurityCode = (numbers: string) => {
    return "*".repeat(numbers.length);
  };
  return (
    <CardWapper>
      <CompanyName>{cardCompany.name || "카드사"} </CompanyName>
      <SecurityTicket />
      <CardNumber>
        {Object.keys(cardNumbers).map((_, i) => (
          <div key={i}>
            <div>
              {i > 1 ? changeSecurityCode(cardNumbers[matchKey(i)]) : cardNumbers[matchKey(i)]}
            </div>
          </div>
        ))}
      </CardNumber>
      <CardInfo>
        <div>{name || "NAME"}</div>
        <div>
          {expiration.month || "MM"}/{expiration.year || "YY"}
        </div>
      </CardInfo>
    </CardWapper>
  );
};

export default Card;
