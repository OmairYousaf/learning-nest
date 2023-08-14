import { Injectable } from '@nestjs/common';
import { CreateReceipt4Dto } from './dto/create-receipt4.dto';
import { UpdateReceipt4Dto } from './dto/update-receipt4.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class Receipt4Service {
  constructor(private prisma: PrismaService) {}

  async create(createReceiptDto: CreateReceipt4Dto) {
    const newReceipt = await this.prisma.receipt.create({
      data: createReceiptDto,
    });
    console.log('Data created successfully.');
    return newReceipt;
  }

  async update(id: string, updateReceiptDto: UpdateReceipt4Dto) {
    const updatedReceipt = await this.prisma.receipt.update({
      where: {
        receiptId: id,
      },
      data: updateReceiptDto,
    });
    console.log('Data updated successfully.');
    return updatedReceipt;
  }
}
