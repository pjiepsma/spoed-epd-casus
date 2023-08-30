export enum PrescriptionUnit {
  gram = 'gram',
  stuks = 'stuks',
  mililiter = 'mililiter',
}

export interface Prescription {
  id: string;
  name:  string;
  description?:  string;
  quantity: number;
  unit: PrescriptionUnit;
}

export interface PrescriptionBody {
  name:  string;
  description?:  string;
  quantity: number,
  unit: PrescriptionUnit;
}

export interface ServiceResponse<T> {
  data: T;
}
