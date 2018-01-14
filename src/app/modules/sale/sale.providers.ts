import { Connection } from 'typeorm';

import { entityRepositoriesTokens, databaseConnectionTokens } from '../../constants';
import { Sale } from '../../entities';

export const saleProviders = [
  {
    provide: entityRepositoriesTokens.Sale,
    useFactory: (connection: Connection) => connection.getRepository(Sale),
    inject: [databaseConnectionTokens.Postgresql]
  }
];