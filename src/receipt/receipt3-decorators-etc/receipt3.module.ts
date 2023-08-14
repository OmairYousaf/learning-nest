import { Module } from '@nestjs/common';
import { Receipt3Service } from './receipt3.service';
import { Receipt3Controller } from './receipt3.controller';

@Module({
  controllers: [Receipt3Controller],
  providers: [Receipt3Service]
})
export class Receipt3Module {}
