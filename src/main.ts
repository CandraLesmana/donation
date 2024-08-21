import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mustache from 'mustache-express';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('views', __dirname + '/../views');
  app.set('view engine', 'html');
  app.engine('html', mustache());
  app.set('view cache', false);
  app.useStaticAssets(join(__dirname + '/../public'));

  await app.listen(3000);
}
bootstrap();
