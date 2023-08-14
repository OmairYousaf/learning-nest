import { CreateReceiptItemDto } from './createReceiptItemDto';

class ReceiptItemCreateDict {
  create: CreateReceiptItemDto[]; //create should have this
}

export class CreateReceiptDto {
  receiptId: string;
  customerName: string;
  date: bigint;
  receiptItems: ReceiptItemCreateDict;
}
