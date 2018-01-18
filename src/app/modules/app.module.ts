import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';

import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { SaleModule } from './sale/sale.module';
import { SalesController } from './sale/sale.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  modules: [SaleModule],
  controllers: [],
  components: []
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(LoggerMiddleware)
      .with('ApplicationModule')
      .forRoutes(SalesController);
  }
}