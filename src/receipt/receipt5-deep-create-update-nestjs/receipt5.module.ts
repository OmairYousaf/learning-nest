import { Module } from '@nestjs/common';
import { Receipt5Service } from './receipt5.service';
import { Receipt5Controller } from './receipt5.controller';

@Module({
  controllers: [Receipt5Controller],
  providers: [Receipt5Service],
  // exports: [Receipt5Service],
})
export class Receipt5Module {}
