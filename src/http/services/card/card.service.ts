import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../database/prisma/prisma.service';
import { ICard } from './interfaces/ICard';
import { ICardData } from './interfaces/ICardData';

@Injectable()
export class CardService {
  constructor(private prisma: PrismaService) {}

  async list(): Promise<ICard[]> {
    return await this.prisma.card.findMany();
  }

  async create(cardData: ICardData): Promise<void> {
    await this.prisma.card.create({
      data: { ...cardData },
    });

    return;
  }
}
