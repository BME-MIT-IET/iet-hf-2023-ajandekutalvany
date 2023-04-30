import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(Config);

  const { port, host } = config.server;
  await app.listen(port, host);
}
bootstrap();
