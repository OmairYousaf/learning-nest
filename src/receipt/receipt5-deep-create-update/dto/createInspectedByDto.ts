export class CreateInspectedByDto {
  inspectById: string;
  name: string;
  age: number;
}

export class InspectedByCreateDict {
  create: CreateInspectedByDto[]; //create should have this
}
