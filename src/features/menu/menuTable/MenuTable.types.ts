export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  status: 'available' | 'unavailable';
  currency: string;
};
