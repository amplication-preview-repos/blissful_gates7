import { Restaurant } from "../restaurant/Restaurant";

export type Item = {
  availabilityStatus: boolean | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  promoActive: boolean | null;
  promoPrice: number | null;
  rating: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
