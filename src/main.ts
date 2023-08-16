import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './guards/roles.guard';

/** */
(BigInt.prototype as any).toJSON = function () {
  return Number(this);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.setGlobalPrefix(`${process.env.URL_PREFIX}`);
=======
  // app.useGlobalGuards(new RolesGuard())
  app.setGlobalPrefix(`${process.env.URL_PREFIX}`)

>>>>>>> 6da8dfe4e0b96132f549aa992f7bd05fac9d3ce9
  // app.useGlobalInterceptors(transformBigIntToString);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      // forbidNonWhitelisted: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Nest Learning')
    .setDescription('The API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(
    `${process.env.URL_PREFIX ?? 'learning'}/swagger`,
    app,
    document,
    { swaggerOptions: { displayRequestDuration: true } },
  );
  console.log(process.env.DB);
  console.log(process.env.db);
  await app.listen(3000);
}
bootstrap();
