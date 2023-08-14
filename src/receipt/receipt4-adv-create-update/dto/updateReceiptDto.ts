import { OmitType, PartialType } from '@nestjs/swagger';

class CreateReceiptItemDto {
  receiptItemId: string;
  itemName: string;
  itemPrice: number;
  itemQuantity: number;
}

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

export class CreateReceiptDto {
  receiptId: string;
  customerName: string;
  date: bigint;
  receiptItems: {
    create?: CreateReceiptItemDto[]; //create should have this
    updateMany?: UpdateReceiptItemWhereDto[];
    deleteMany?: ReceiptItemIdDto[];
  };
}

// export class UpdateReceiptDto {
//   customerName?: string;
//   date?: bigint;
//   receiptItems?: {
//     create: CreateReceiptItemDto[];
//     updateMany: UpdateReceiptItemWhereDto[];
//     deleteMany: ReceiptItemIdDto[];
//   };
// }

export class UpdateReceiptDto extends PartialType(
  OmitType(CreateReceiptDto, ['receiptId']),
) {}
