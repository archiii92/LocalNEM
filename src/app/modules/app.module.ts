import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';


// import { LoggerMiddleware } from '../middlewares/logger.middleware';
// import { SaleModule } from './sale/sale.module';
// import { SalesController } from './sale/sale.controller';
// import { DatabaseModule } from './database/database.module';

import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { CatsModule } from './cats/cats.module';

// @Module({
//   modules: [SaleModule],
//   controllers: [],
//   components: []
// })
// export class ApplicationModule implements NestModule {
//   configure(consumer: MiddlewaresConsumer): void {
//       consumer.apply(LoggerMiddleware)
//       .with('ApplicationModule')
//       .forRoutes(SalesController);
//   }
// }

@Module({
  imports: [SubscriptionsModule.forRoot(), CatsModule, GraphQLModule]
})
export class ApplicationModule implements NestModule {
  constructor(
    private readonly subscriptionsModule: SubscriptionsModule,
    private readonly graphQLFactory: GraphQLFactory
  ) {}

  configure(consumer: MiddlewaresConsumer) {
    const schema = this.createSchema();
    this.subscriptionsModule.createSubscriptionServer(schema);

    consumer
      .apply(
        graphiqlExpress({
          endpointURL: '/graphql',
          subscriptionsEndpoint: `ws://localhost:3001/subscriptions`,
        }),
      )
      .forRoutes({ path: '/graphiql', method: RequestMethod.GET })
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes({ path: '/graphql', method: RequestMethod.ALL });
  }

  createSchema() {
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
    const schema = this.graphQLFactory.createSchema({ typeDefs });
    return schema;
  }
}