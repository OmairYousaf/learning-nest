import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateReceiptItemDto {
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

class ReceiptItemCreateDict {
  @ApiProperty({ type: CreateReceiptItemDto, isArray: true })
  create: CreateReceiptItemDto[]; //create should have this
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

  @ApiProperty({ type: ReceiptItemCreateDict, isArray: false })
  receiptItems: ReceiptItemCreateDict;
}
