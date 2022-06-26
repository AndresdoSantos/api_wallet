type TCardFunction = 'CREDIT' | 'DEBIT' | 'CREDIT_DEBIT';

export interface ICardData {
  name: string;
  number: string;
  validity: string;
  limit: number;
  cvc: number;
  institution: string;
  flag: string;
  function: TCardFunction;
}
