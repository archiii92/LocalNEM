import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { SaleModule } from './sale/sale.module';
import { SaleController } from './sale/sale.controller';
import { Sale } from './sale/sale.entity';

@Module({
  modules: [TypeOrmModule.forRoot([Sale]), SaleModule],
  controllers: [],
  components: []
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(LoggerMiddleware)
      .with('ApplicationModule')
      .forRoutes(SaleController);
  }
}