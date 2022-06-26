export interface ITransactionData {
  providerName: string;
  productPrice: number;
  productName: string;
  productDescription?: string;
  productInstallment?: number;

  cardId: string;
}
