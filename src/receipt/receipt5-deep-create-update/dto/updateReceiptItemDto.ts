import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateReceiptItemDto } from './createReceiptItemDto';

export class ReceiptItemIdDto {
  receiptItemId: string;
}

export class UpdateReceiptItemWhereDto {
  where: ReceiptItemIdDto;
  data: UpdateReceiptItemDto;
}

export class UpdateReceiptItemDto extends PartialType(
  OmitType(CreateReceiptItemDto, ['receiptItemId']),
) {}
