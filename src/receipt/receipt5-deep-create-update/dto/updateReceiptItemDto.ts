import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateReceiptItemDto } from './createReceiptItemDto';
import { ItemInspectionUpdateDict } from './updateItemInspectionDto';

export class ReceiptItemIdDto {
  receiptItemId: string;
}

export class UpdateReceiptItemDto extends PartialType(
  OmitType(CreateReceiptItemDto, ['receiptItemId', 'itemInspections']),
) {
  itemInspections: ItemInspectionUpdateDict;
}

// export class UpdateReceiptDto extends PartialType(
//   OmitType(CreateReceiptDto, ['receiptId', 'receiptItems']),
// ) {
//   receiptItems: ReceiptItemUpdateDict;
// }

export class UpdateReceiptItemWhereDto {
  where: ReceiptItemIdDto;
  data: UpdateReceiptItemDto;
}

export class ReceiptItemUpdateDict {
  create?: CreateReceiptItemDto[]; //create should have this
  updateMany?: UpdateReceiptItemWhereDto[];
  deleteMany?: ReceiptItemIdDto[];
}
