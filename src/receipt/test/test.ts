(BigInt.prototype as any).toJSON = function () {
  console.log('Going to convert !!!..............');
  return this;
};

let a = {
  receiptItemId: `receiptItem-001`,
  itemName: 'Table',
  itemPrice: 10.0,
  itemQuantity: 2n,
};
console.log(JSON.stringify(a));
