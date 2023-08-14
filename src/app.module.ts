import { Module } from '@nestjs/common';
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

import { ConfigModule } from '@nestjs/config';

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
  ],
  controllers: [
    AppController,
    Receipt2Controller,
    Receipt3Controller,
    Receipt4Controller,
  ],
  providers: [AppService, Receipt2Service, Receipt3Service, Receipt4Service],
})
export class AppModule {}
