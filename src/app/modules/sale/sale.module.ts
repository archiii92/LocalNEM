import { Module } from '@nestjs/common';

import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { saleProviders } from './sale.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  components: [
    ...saleProviders,
    SaleService
  ],
  controllers: [SaleController]
})
export class SaleModule {}