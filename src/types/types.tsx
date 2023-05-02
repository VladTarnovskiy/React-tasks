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

interface Tag {
  type: string;
  title: string;
}

export interface UnsplashCardData {
  id: number;
  alt_description: string;
  description: string;
  created_at: string;
  height: number;
  width: number;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  tags: Tag[];
}
