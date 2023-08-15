import { ReceiptItemCreateDict } from './createReceiptItemDto';

export class CreateReceiptDto {
  receiptId: string;
  customerName: string;
  date: bigint;
  receiptItems: ReceiptItemCreateDict;
}
