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

  findAll(): Promise<Sale[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Sale> {
    return this.repository.findOneById(id);
  }

  create(createSaleDto: CreateSaleDto): Promise<void> {
    const sale = this.repository.create(createSaleDto);
    console.log(sale);
    return this.repository.insert(sale);

    //const newEntity = this.repository.create(createSaleDto);
    //console.log(newEntity);
    //return !!newEntity;
  }

  // async update(updateSaleDto: UpdateSaleDto): Promise<boolean> {
  //   await this.repository.updateById(updateSaleDto.id, updateSaleDto);
  //   return true;
  // }

  // async delete(id: string): Promise<boolean> {
  //   await this.repository.removeById(id);
  //   return true;
  // }
}