module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '12345',
    database: 'localNEM',
    entities: [
      'src/app/modules/**/**.entity.ts'
    ],
    migrations: [
      'migrations/*.ts'
    ],
    cli: {
      'migrationsDir': 'migrations'
    },
    synchronize: true,
    //dropSchema: true
    logging: "all"
}