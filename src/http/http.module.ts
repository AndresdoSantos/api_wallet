import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '../database/database.module';

import { CardController } from './services/card/card.controller';
import { CardService } from './services/card/card.service';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [CardController],
  providers: [CardService],
})
export class HttpModule {}
