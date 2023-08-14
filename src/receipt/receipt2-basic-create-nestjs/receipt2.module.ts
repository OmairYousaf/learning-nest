import { Module } from '@nestjs/common';
import { Receipt2Service } from './receipt2.service';
import { Receipt2Controller } from './receipt2.controller';

@Module({
  controllers: [Receipt2Controller],
  providers: [Receipt2Service]
})
export class Receipt2Module {}
