import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { entityRepositoriesTokens } from '../../constants';
import { Sale } from '../../entities';

@Component()
export class SaleService {
  constructor(
    @Inject(entityRepositoriesTokens.Sale) private readonly saleRepository: Repository<Sale>
  ) {}

  async findAll(): Promise<Sale[]> {
    return await this.saleRepository.find();
  }
}