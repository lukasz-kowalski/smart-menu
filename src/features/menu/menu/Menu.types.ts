export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  status: 'available' | 'unavailable';
  currency: string;
  categoryId: string;
};

export type Category = {
  id: string;
  name: string;
  order: number;
  items: MenuItem[];
};

export type HeaderItem = {
  name: string;
  label: string;
};

export type Header = {
  items: HeaderItem[];
};
