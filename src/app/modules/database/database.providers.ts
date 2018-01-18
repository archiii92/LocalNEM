import { createConnection } from 'typeorm';

import { databaseConnectionTokens } from '../../constants';

export const databaseProviders = [
  {
    provide: databaseConnectionTokens.Postgresql,
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '12345',
      database: 'localNEM',
      entities: [
        // 'src/app/entities.ts',
        'src/app/modules/**/**.entity.ts'
      ],
      // migrations: [
      //   __dirname + 'migration/**/*.ts'
      // ]
      synchronize: true,
      dropSchema: true
    })
  }
];