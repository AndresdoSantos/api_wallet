import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ITransaction } from './interfaces/ITransaction';
import { ITransactionData } from './interfaces/ITransactionData';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async list(): Promise<ITransaction[]> {
    return this.transactionService.list();
  }

  @Get(':cardId')
  async listTransactionsByCardId(
    @Param() param: { cardId: string },
  ): Promise<ITransaction[]> {
    return this.transactionService.listTransactionsByCardId(param.cardId);
  }

  @Post()
  async create(@Body() createTransactionData: ITransactionData): Promise<void> {
    return this.transactionService.create(createTransactionData);
  }
}
