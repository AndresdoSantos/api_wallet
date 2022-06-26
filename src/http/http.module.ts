import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '../database/database.module';

import { CardController } from './services/card/card.controller';
import { CardService } from './services/card/card.service';

import { TransactionController } from './services/transaction/transaction.controller';
import { TransactionService } from './services/transaction/transaction.service';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [CardController, TransactionController],
  providers: [CardService, TransactionService],
})
export class HttpModule {}
