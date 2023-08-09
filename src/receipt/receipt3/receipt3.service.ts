import { Injectable } from '@nestjs/common';
import { CreateReceipt3Dto } from './dto/create-receipt3.dto';
import { createReceipt } from '../receipt1/receipt1';
// import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import { Prisma } from '@prisma/client';

@Injectable()
export class Receipt3Service {
  constructor(private prisma: PrismaService) {}

  create(createReceipt3Dto: CreateReceipt3Dto) {
    return 'This action adds a new receipt';
  }

 
  findAll() {
    return `This action returns all receipts find all`;
  }
  find() {
    return `This action returns all receipts finds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt`;
  }
  findByIds(ids: number[]) {
    return `This action returns a #${ids} receipts`;
  }

  findUserByName(user:any) {
    return `Perform actions on receipt ${user.username}`;
  }


 
}
