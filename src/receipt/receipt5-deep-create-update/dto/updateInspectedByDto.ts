import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateInspectedByDto } from './createInspectedByDto';

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
  updateMany?: UpdateInspectedByWhereDto[];
  deleteMany?: InspectedByIdDto[];
}
