import { ItemInspectionCreateDict } from './createItemInspectionDto';

export class CreateReceiptItemDto {
  receiptItemId: string;
  itemName: string;
  itemPrice: number;
  itemQuantity: number;
  ItemInspection?: ItemInspectionCreateDict;
}

export class ReceiptItemCreateDict {
  create: CreateReceiptItemDto[]; //create should have this
}
