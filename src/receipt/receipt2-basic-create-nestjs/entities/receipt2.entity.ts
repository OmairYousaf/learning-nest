import { ApiProperty } from '@nestjs/swagger';

export class Receipt2 {}

export class CreateRespEntity {
  @ApiProperty({
    description: 'Receipt Id',
    example: '43234-23423-234234',
  })
  receiptId: string;

  @ApiProperty({
    description: 'Date',
    example: 4423221,
  })
  date: bigint;
}
