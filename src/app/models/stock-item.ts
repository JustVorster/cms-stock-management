export interface Image {
  id: number;
  name: string;
  data: string;
  stockItemId: number;
}

export interface StockItem {
  id: number;
  regNo: string;
  make: string;
  model: string;
  modelYear: number;
  kms: number;
  colour: string;
  vin: string;
  retailPrice: number;
  costPrice: number;
  dtCreated: string;
  dtUpdated: string;

  images: Image[];
}