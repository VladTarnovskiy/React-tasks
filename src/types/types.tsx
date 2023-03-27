export interface FormCardType {
  id?: number;
  name: string;
  birthday: string;
  country: string;
  vehicle: Vehicle;
  gender: string;
  photo?: string;
  rules?: boolean;
}

export interface Vehicle {
  car: boolean;
  motorcycle: boolean;
  bike: boolean;
}
