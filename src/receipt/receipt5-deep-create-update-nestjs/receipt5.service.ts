import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt5.dto';
import { UpdateReceiptDto } from './dto/update-receipt5.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class Receipt5Service {
  constructor(private prisma: PrismaService) {}

  async create(createReceiptDto: CreateReceiptDto) {
    const newReceipt = await this.prisma.receipt.create({
      data: createReceiptDto,
    });
    console.log('Data created successfully.');
    return newReceipt;
  }

  async update(id: string, updateReceiptDto: UpdateReceiptDto) {
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
