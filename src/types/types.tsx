export interface CardData {
  id?: number;
  name: string;
  birthday: string;
  country: string;
  vehicle: string[];
  gender: string;
  photo: string;
  rules?: boolean;
}

export interface FormData {
  id?: number;
  name: string;
  birthday: string;
  country: string;
  vehicle: string[];
  gender: string;
  photo: FileList;
  rules?: boolean;
}
