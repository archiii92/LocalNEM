import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { entityRepositoriesTokens } from '../../constants';
import { Sale } from './sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Component()
export class SaleService {
  constructor(
    @Inject(entityRepositoriesTokens.Sale) private readonly repository: Repository<Sale>
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneById(id);
  }

  create(createSaleDto: CreateSaleDto) {
    const sale = this.repository.create(createSaleDto);
    console.log(sale);
    return this.repository.insert(sale);
  }

  update(updateSaleDto: UpdateSaleDto) {
    return this.repository.updateById(updateSaleDto.id, updateSaleDto);
  }

  delete(id: string) {
    return this.repository.removeById(id);
  }
}