import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsInt, IsString } from 'class-validator';
class ReceiptItem {
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
  @IsInt()
  itemPrice: number;

  @ApiProperty({
    description: 'Quantity',
    example: 2,
  })
  @IsInt()
  itemQuantity: number;
}

export class CreateReceipt3Dto {
  @ApiProperty({
    description: 'Customer Name',
    example: 'Barak Obama',
  })
  @IsString()
  customerName: string;

  @ApiProperty({
    description: 'Date',
    example: 4423221,
  })
  
  date: bigint;

  @ApiProperty({ type: ReceiptItem, isArray: true })
  receiptItems: ReceiptItem[];
}
