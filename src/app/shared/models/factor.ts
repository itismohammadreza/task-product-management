export class FactorRecord {
  productId: number;
  productName: string;
  count: number;
  discount: number;
  unitPriceWithDiscount: number;
  unitPriceWithoutDiscount: number;
  totalPriceWithDiscount: number;
  totalPriceWithoutDiscount: number;
  unitPriceBenefit: number;
  totalPriceBenefit: number;
}

export class Factor {
  id: number;
  submitDate: Date;
  customerName: string;
  description: string;
  total: number;
  totalDiscount: number;
  payable: number;
  records: FactorRecord[];
}
