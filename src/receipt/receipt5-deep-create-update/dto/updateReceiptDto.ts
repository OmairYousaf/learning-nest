import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateReceiptDto } from './createReceiptDto';
import { ReceiptItemUpdateDict } from './updateReceiptItemDto';

export class UpdateReceiptDto extends PartialType(
  OmitType(CreateReceiptDto, ['receiptId', 'receiptItems']),
) {
  receiptItems: ReceiptItemUpdateDict;
}
