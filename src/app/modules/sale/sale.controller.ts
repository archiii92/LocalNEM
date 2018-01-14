import { Controller, Get } from '@nestjs/common';

import { SaleService } from './sale.service';
import { Sale } from '../../entities';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get()
  findAll(): Promise<Sale[]> {
    return this.saleService.findAll();
  }
}