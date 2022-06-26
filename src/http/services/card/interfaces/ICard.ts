type TCardFunction = 'CREDIT' | 'DEBIT' | 'CREDIT_DEBIT';

export interface ICard {
  id: string;
  name: string;
  number: string;
  validity: string;
  limit: number;
  cvc: number;
  institution: string;
  flag: string;
  function: TCardFunction;
  createdAt: Date;
  updatedAt: Date;
}
