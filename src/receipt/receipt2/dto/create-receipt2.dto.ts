import { ApiProperty } from '@nestjs/swagger';
class ReceiptItem {
  @ApiProperty({
    description: 'Item name',
    example: 'Chair',
  })
  itemName: string;

  @ApiProperty({
    description: 'Price',
    example: 12,
  })
  itemPrice: number;

  @ApiProperty({
    description: 'Quantity',
    example: 2,
  })
  itemQuantity: number;
}

export class CreateReceipt2Dto {
  @ApiProperty({
    description: 'Customer Name',
    example: 'Barak Obama',
  })
  customerName: string;

  @ApiProperty({
    description: 'Date',
    example: 4423221,
  })
  date: bigint;

  @ApiProperty({ type: ReceiptItem, isArray: true })
  receiptItems: ReceiptItem[];
}
