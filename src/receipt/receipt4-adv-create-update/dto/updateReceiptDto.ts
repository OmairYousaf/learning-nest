import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateReceiptItemDto, CreateReceiptDto } from './createReceiptDto';

class UpdateReceiptItemDto extends PartialType(
  OmitType(CreateReceiptItemDto, ['receiptItemId']),
) {}

class ReceiptItemIdDto {
  receiptItemId: string;
}

class UpdateReceiptItemWhereDto {
  where: ReceiptItemIdDto;
  data: UpdateReceiptItemDto;
}

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
