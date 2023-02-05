import type { CardExpiration, CardName, CardNumbers } from "../../types/common";

export interface CardType {
  numbers: CardNumbers;
  expiration: CardExpiration;
  name: CardName;
}
