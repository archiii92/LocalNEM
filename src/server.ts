import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ApplicationModule } from './app/modules/app.module';
import { ValidationPipe } from './app/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('LocalNEM example')
    .setDescription('The LocalNEM API description')
    .setVersion('1.0')
    .addTag('LocalNEM')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api', app, document);

  await app.listen(3000);
  console.log('Application is listening on port 3000');
}
bootstrap();
