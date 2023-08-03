import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Receipt2Controller } from './receipt/receipt2/receipt2.controller';
import { Receipt2Service } from './receipt/receipt2/receipt2.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AppController, Receipt2Controller],
  providers: [AppService, Receipt2Service],
})
export class AppModule {}
