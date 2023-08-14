import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateReceipt4Dto } from './create-receipt4.dto';

export class UpdateReceipt4Dto extends PartialType(
  OmitType(CreateReceipt4Dto, ['receiptId']),
) {}
