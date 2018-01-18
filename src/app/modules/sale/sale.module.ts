import { Module } from '@nestjs/common';

import { SaleService } from './sale.service';
import { SalesController } from './sale.controller';
import { saleProviders } from './sale.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  components: [
    ...saleProviders,
    SaleService
  ],
  controllers: [SalesController]
})
export class SaleModule {}