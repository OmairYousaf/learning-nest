import { PartialType } from '@nestjs/mapped-types';
import { CreateReceipt3Dto } from './create-receipt3.dto';

export class UpdateReceipt2Dto extends PartialType(CreateReceipt3Dto) {}
