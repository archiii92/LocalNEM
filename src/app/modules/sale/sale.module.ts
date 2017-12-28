import { Module } from '@nestjs/common';

import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';

@Module({
  components: [SaleService],
  controllers: [SaleController]
})
export class SaleModule {}