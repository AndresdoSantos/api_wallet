import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../database/prisma/prisma.service';
import { ITransaction } from './interfaces/ITransaction';
import { ITransactionData } from './interfaces/ITransactionData';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async list(): Promise<ITransaction[]> {
    return await this.prisma.transaction.findMany({
      include: {
        card: true,
      },
    });
  }

  async listTransactionsByCardId(cardId: string): Promise<ITransaction[]> {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        cardId,
      },
    });

    return transactions;
  }

  async create(createTransactionData: ITransactionData) {
    await this.prisma.transaction.create({
      data: {
        productName: createTransactionData.productName,
        productPrice: createTransactionData.productPrice,
        providerName: createTransactionData.providerName,
        productDescription: createTransactionData?.productDescription,
        productInstallment: createTransactionData?.productInstallment,
        card: {
          connect: {
            id: createTransactionData.cardId,
          },
        },
      },
    });
  }
}
