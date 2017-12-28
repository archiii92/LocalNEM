import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

import { Sale } from './sale.entity';

@Component()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>
  ) {}

  async findAll(): Promise<Sale[]> {
    return await this.saleRepository.find();
  }
}