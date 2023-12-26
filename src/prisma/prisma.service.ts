import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          // url: process.env.DATABASE_URL,
          url: process.env.POSTGRES_PRISMA_URL,
        },
      },
    });
  }
}
