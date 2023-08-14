import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { CreateReceipt4Dto, CreateReceiptItemDto } from './create-receipt4.dto';
import { IsUUID } from 'class-validator';

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

class ReceiptItemUpdateDict {
  @ApiProperty({ type: CreateReceiptItemDto, isArray: true })
  create?: CreateReceiptItemDto[]; //create should have this

  @ApiProperty({ type: UpdateReceiptItemWhereDto, isArray: true })
  updateMany?: UpdateReceiptItemWhereDto[];

  @ApiProperty({ type: ReceiptItemIdDto, isArray: true })
  deleteMany?: ReceiptItemIdDto[];
}
export class UpdateReceipt4Dto extends PartialType(
  OmitType(CreateReceipt4Dto, ['receiptId', 'receiptItems']),
) {
  @ApiProperty({ type: ReceiptItemUpdateDict, isArray: false })
  receiptItems: ReceiptItemUpdateDict;
}
