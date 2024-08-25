import { Item } from "../item/Item";
import { JsonValue } from "type-fest";

export type Restaurant = {
  contactPhone: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  items?: Array<Item>;
  location: JsonValue;
  name: string | null;
  rating: number | null;
  updatedAt: Date;
};
