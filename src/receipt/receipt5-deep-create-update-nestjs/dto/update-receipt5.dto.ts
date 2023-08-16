import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  // CreateReceipt5Dto,
  CreateReceiptDto,
  CreateReceiptItemDto,
  CreateInspectedByDto,
  CreateItemInspectionDto,
} from './create-receipt5.dto';
import { IsUUID } from 'class-validator';

export class InspectedByIdDto {
  inspectById: string;
}

export class UpdateInspectedByDto extends PartialType(
  OmitType(CreateInspectedByDto, ['inspectById']),
) {}

export class UpdateInspectedByWhereDto {
  where: InspectedByIdDto;
  data: UpdateInspectedByDto;
}

export class InspectedByUpdateDict {
  create?: CreateInspectedByDto[];
  update?: UpdateInspectedByWhereDto[];
  delete?: InspectedByIdDto[];
}

export class ItemInspectionIdDto {
  itemInspectionId: string;
}

export class UpdateItemInspectionDto extends PartialType(
  OmitType(CreateItemInspectionDto, ['itemInspectionId', 'inspectBys']),
) {
  inspectBys: InspectedByUpdateDict;
}

export class UpdateItemInspectionWhereDto {
  where: ItemInspectionIdDto;
  data: UpdateItemInspectionDto;
}

export class ItemInspectionUpdateDict {
  create?: CreateItemInspectionDto[];
  update?: UpdateItemInspectionWhereDto[];
  delete?: ItemInspectionIdDto[];
}

export class ReceiptItemIdDto {
  receiptItemId: string;
}

export class UpdateReceiptItemDto extends PartialType(
  OmitType(CreateReceiptItemDto, ['receiptItemId', 'itemInspections']),
) {
  itemInspections: ItemInspectionUpdateDict;
}

export class UpdateReceiptItemWhereDto {
  where: ReceiptItemIdDto;
  data: UpdateReceiptItemDto;
}

export class ReceiptItemUpdateDict {
  create?: CreateReceiptItemDto[]; //create should have this
  update?: UpdateReceiptItemWhereDto[];
  delete?: ReceiptItemIdDto[];
}

export class UpdateReceiptDto extends PartialType(
  OmitType(CreateReceiptDto, ['receiptId', 'receiptItems']),
) {
  receiptItems: ReceiptItemUpdateDict;
}

// class UpdateReceiptItemDto extends PartialType(
//   OmitType(CreateReceiptItemDto, ['receiptItemId']),
// ) {}

// class ReceiptItemIdDto {
//   @ApiProperty({
//     description: 'receiptItemId of CreateReceiptItemDto',
//     example: '4422-442-99913-abcd',
//     format: 'uuid',
//   })
//   @IsUUID()
//   receiptItemId: string;
// }

// class UpdateReceiptItemWhereDto {
//   @ApiProperty({ type: ReceiptItemIdDto, isArray: false })
//   where: ReceiptItemIdDto;

//   @ApiProperty({ type: UpdateReceiptItemDto, isArray: false })
//   data: UpdateReceiptItemDto;
// }

// class ReceiptItemUpdateDict {
//   @ApiProperty({ type: CreateReceiptItemDto, isArray: true })
//   create?: CreateReceiptItemDto[]; //create should have this

//   @ApiProperty({ type: UpdateReceiptItemWhereDto, isArray: true })
//   updateMany?: UpdateReceiptItemWhereDto[];

//   @ApiProperty({ type: ReceiptItemIdDto, isArray: true })
//   deleteMany?: ReceiptItemIdDto[];
// }
// export class UpdateReceipt5Dto extends PartialType(
//   OmitType(CreateReceipt5Dto, ['receiptId', 'receiptItems']),
// ) {
//   @ApiProperty({ type: ReceiptItemUpdateDict, isArray: false })
//   receiptItems: ReceiptItemUpdateDict;
// }
