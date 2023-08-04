import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Receipt2Controller } from './receipt/receipt2/receipt2.controller';
import { Receipt2Service } from './receipt/receipt2/receipt2.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { Receipt3Controller } from './receipt/receipt3/receipt3.controller';
import { Receipt3Service } from './receipt/receipt3/receipt3.service';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AppController, Receipt2Controller,Receipt3Controller],
  providers: [AppService, Receipt2Service,Receipt3Service],
})
export class AppModule {}
