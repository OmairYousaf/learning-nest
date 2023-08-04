import { Injectable } from '@nestjs/common';
import { CreateReceipt2Dto } from './dto/create-receipt2.dto';
import { UpdateReceipt2Dto } from './dto/update-receipt2.dto';
import { createReceipt } from '../receipt1/receipt1';
// import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import { Prisma } from '@prisma/client';

@Injectable()
export class Receipt2Service {
  constructor(private prisma: PrismaService) {}

  async create(createReceipt2Dto: CreateReceipt2Dto) {
    console.log('from service....',createReceipt2Dto);

    let { receiptItems, ...baseReceipt } = createReceipt2Dto;

    let newItems = receiptItems.map((v) => {
      return { ...v, receiptItemId: randomUUID() };
    });

    let receiptData: Prisma.ReceiptUncheckedCreateInput = {
      receiptId: randomUUID(),
      ...baseReceipt,
      receiptItems: {
        create: newItems,
      },
    };

    const receipt = await this.prisma.receipt.create({
      data: receiptData,
      select: {
        receiptId: true,
        date: true,
      },
    });
    console.log(receipt);
    return receipt;
  }

  findAll() {
    return `This action returns all receipt2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receipt2`;
  }

  update(id: number, updateReceipt2Dto: UpdateReceipt2Dto) {
    return `This action updates a #${id} receipt2`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt2`;
  }
}
