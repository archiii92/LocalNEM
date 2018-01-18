import { Connection } from 'typeorm';

import { entityRepositoriesTokens, databaseConnectionTokens } from '../../constants';
import { Sale } from './sale.entity';

export const saleProviders = [
  {
    provide: entityRepositoriesTokens.Sale,
    useFactory: (connection: Connection) => connection.getRepository(Sale),
    inject: [databaseConnectionTokens.Postgresql]
  }
];