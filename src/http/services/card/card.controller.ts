import { Body, Controller, Get, Post } from '@nestjs/common';

import { CardService } from './card.service';

import { ICard } from './interfaces/ICard';
import { ICardData } from './interfaces/ICardData';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  async list(): Promise<ICard[]> {
    return this.cardService.list();
  }

  @Post()
  async create(@Body() cardData: ICardData): Promise<void> {
    return this.cardService.create(cardData);
  }
}
