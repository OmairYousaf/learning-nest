import { InspectedByCreateDict } from './createInspectedByDto';

export class CreateItemInspectionDto {
  itemInspectionId: string;
  date: bigint;
  comments: string;
  inspectBys?: InspectedByCreateDict;
}

export class ItemInspectionCreateDict {
  create: CreateItemInspectionDto[]; //create should have this
}
