import { PartialType } from '@nestjs/mapped-types';
import { CreateReceipt2Dto } from './create-receipt2.dto';

export class UpdateReceipt2Dto extends PartialType(CreateReceipt2Dto) {}
