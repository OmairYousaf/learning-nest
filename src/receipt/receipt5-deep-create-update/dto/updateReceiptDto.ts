import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateReceiptItemDto } from './createReceiptItemDto';
import { CreateReceiptDto } from './createReceiptDto';
import {
  UpdateReceiptItemWhereDto,
  ReceiptItemIdDto,
} from './updateReceiptItemDto';

class ReceiptItemUpdateDict {
  create?: CreateReceiptItemDto[]; //create should have this
  updateMany?: UpdateReceiptItemWhereDto[];
  deleteMany?: ReceiptItemIdDto[];
}

export class UpdateReceiptDto extends PartialType(
  OmitType(CreateReceiptDto, ['receiptId', 'receiptItems']),
) {
  receiptItems: ReceiptItemUpdateDict;
}
