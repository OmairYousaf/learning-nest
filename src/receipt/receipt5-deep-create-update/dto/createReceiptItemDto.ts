import { ItemInspectionCreateDict } from './createItemInspectionDto';

export class CreateReceiptItemDto {
  receiptItemId: string;
  itemName: string;
  itemPrice: number;
  itemQuantity: number;
  itemInspections?: ItemInspectionCreateDict;
}

export class ReceiptItemCreateDict {
  create: CreateReceiptItemDto[]; //create should have this
}
