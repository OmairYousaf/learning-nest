export class CreateReceiptDto {
  customerName: string;
  date: bigint;
  receiptItems: ReceiptItem[];
}

class ReceiptItem {
  itemName: string;
  itemPrice: number;
  itemQuantity: number;
}
