// import { ApiProperty } from '@nestjs/swagger';
// class ReceiptItem {
//   @ApiProperty({
//     description: 'Item name',
//     example: 'Chair',
//   })
//   itemName: string;

//   @ApiProperty({
//     description: 'Price',
//     example: 12,
//   })
//   itemPrice: number;

//   @ApiProperty({
//     description: 'Quantity',
//     example: 2,
//   })
//   itemQuantity: number;
// }

// export class CreateReceipt2Dto {
//   @ApiProperty({
//     description: 'Customer Name',
//     example: 'Barak Obama',
//   })
//   customerName: string;

//   @ApiProperty({
//     description: 'Date',
//     example: 4423221,
//   })
//   date: bigint;

//   @ApiProperty({ type: ReceiptItem, isArray: true })
//   receiptItems: ReceiptItem[];
// }
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

// class ReceiptItem {
//   @ApiProperty({
//     description: 'Item name',
//     example: 'Chair',
//   })
//   itemName: string;

//   @ApiProperty({
//     description: 'Price',
//     example: 12,
//   })
//   itemPrice: number;

//   @ApiProperty({
//     description: 'Quantity',
//     example: 2,
//   })
//   itemQuantity: number;
// }

class CreateReceiptItemDto {
  @ApiProperty({
    description: 'receiptItemId of CreateReceiptItemDto',
    example: '4422-442-99913-abcd',
    format: 'uuid',
  })
  @IsUUID()
  receiptItemId: string;

  @ApiProperty({
    description: 'Item name',
    example: 'Chair',
  })
  @IsString()
  itemName: string;

  @ApiProperty({
    description: 'Price',
    example: 12,
  })
  @IsNumber()
  itemPrice: number;

  @ApiProperty({
    description: 'Quantity',
    example: 2,
  })
  @IsNumber()
  itemQuantity: number;
}

class UpdateReceiptItemDto extends PartialType(
  OmitType(CreateReceiptItemDto, ['receiptItemId']),
) {}

class ReceiptItemIdDto {
  @ApiProperty({
    description: 'receiptItemId of CreateReceiptItemDto',
    example: '4422-442-99913-abcd',
    format: 'uuid',
  })
  @IsUUID()
  receiptItemId: string;
}

class UpdateReceiptItemWhereDto {
  @ApiProperty({ type: ReceiptItemIdDto, isArray: false })
  where: ReceiptItemIdDto;

  @ApiProperty({ type: UpdateReceiptItemDto, isArray: false })
  data: UpdateReceiptItemDto;
}

class ReceiptItemCreateUpdate {
  @ApiProperty({ type: CreateReceiptItemDto, isArray: true })
  create?: CreateReceiptItemDto[]; //create should have this

  @ApiProperty({ type: UpdateReceiptItemWhereDto, isArray: true })
  updateMany?: UpdateReceiptItemWhereDto[];

  @ApiProperty({ type: ReceiptItemIdDto, isArray: true })
  deleteMany?: ReceiptItemIdDto[];
}

export class CreateReceipt4Dto {
  @ApiProperty({
    description: 'receiptItemId of CreateReceiptItemDto',
    example: '4422-442-99913-abcd',
    format: 'uuid',
  })
  @IsUUID()
  receiptId: string;

  @ApiProperty({
    description: 'customerName of Receipt',
    example: 'customerName',
  })
  @IsString()
  customerName: string;

  @ApiProperty({
    description: 'Date',
    example: 4423221,
  })
  @IsNumber()
  date: bigint;

  @ApiProperty({ type: ReceiptItemCreateUpdate, isArray: false })
  receiptItems: ReceiptItemCreateUpdate;
}
