export type Promotion = {
  createdAt: Date;
  description: string | null;
  discount: number | null;
  expiryDate: Date | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
