import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Receipt2Controller } from './receipt/receipt2-basic-create-nestjs/receipt2.controller';
import { Receipt2Service } from './receipt/receipt2-basic-create-nestjs/receipt2.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { Receipt3Controller } from './receipt/receipt3-decorators-etc/receipt3.controller';
import { Receipt3Service } from './receipt/receipt3-decorators-etc/receipt3.service';
// import { Receipt4Module } from './receipt/receipt4-adv-create-update-nestjs/receipt4.module';
import { Receipt4Controller } from './receipt/receipt4-adv-create-update-nestjs/receipt4.controller';
import { Receipt4Service } from './receipt/receipt4-adv-create-update-nestjs/receipt4.service';

import { Receipt5Controller } from './receipt/receipt5-deep-create-update-nestjs/receipt5.controller';
import { Receipt5Service } from './receipt/receipt5-deep-create-update-nestjs/receipt5.service';

import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    // Receipt4Module,
    ConfigModule.forRoot({
      envFilePath: '.env.conf',
      // ignoreEnvFile:true,
      // isGlobal: true,
    }),
    ConfigModule.forRoot({isGlobal:true})
  ],
  controllers: [
    AppController,
    Receipt2Controller,
    Receipt3Controller,
    Receipt4Controller,
    Receipt5Controller,
  ],
  providers: [
    AppService,
    Receipt2Service,
    Receipt3Service,
    Receipt4Service,
    Receipt5Service,
  ],
})
export class AppModule {
 
  
}
