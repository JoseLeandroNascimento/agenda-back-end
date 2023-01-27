import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform: true
  }))

  process.env.TZ = "America/Rio_branco";
  
  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();