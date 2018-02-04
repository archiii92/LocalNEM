import { createConnection } from 'typeorm';

import { databaseConnectionTokens } from '../../constants';

export const databaseProviders = [
  {
    provide: databaseConnectionTokens.Postgresql,
    useFactory: async () => await createConnection()
  }
];