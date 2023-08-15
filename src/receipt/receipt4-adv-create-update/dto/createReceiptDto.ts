export class CreateReceiptItemDto {
  receiptItemId: string;
  itemName: string;
  itemPrice: number;
  itemQuantity: number;
}

class ReceiptItemCreateDict {
  create: CreateReceiptItemDto[]; //create should have this
}

export class CreateReceiptDto {
  receiptId: string;
  customerName: string;
  date: bigint;
  receiptItems: ReceiptItemCreateDict;
}
