import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateItemInspectionDto } from './createItemInspectionDto';
import { InspectedByUpdateDict } from './updateInspectedByDto';

export class ItemInspectionIdDto {
  itemInspectionId: string;
}

export class UpdateItemInspectionDto extends PartialType(
  OmitType(CreateItemInspectionDto, ['itemInspectionId', 'inspectBys']),
) {
  inspectBys: InspectedByUpdateDict;
}

export class UpdateItemInspectionWhereDto {
  where: ItemInspectionIdDto;
  data: UpdateItemInspectionDto;
}

export class ItemInspectionUpdateDict {
  create?: CreateItemInspectionDto[];
  updateMany?: UpdateItemInspectionWhereDto[];
  deleteMany?: ItemInspectionIdDto[];
}
