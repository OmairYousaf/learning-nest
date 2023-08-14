import { Module } from '@nestjs/common';
import { Receipt4Service } from './receipt4.service';
import { Receipt4Controller } from './receipt4.controller';

@Module({
  controllers: [Receipt4Controller],
  providers: [Receipt4Service],
  // exports: [Receipt4Service],
})
export class Receipt4Module {}
