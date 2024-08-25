import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  deliveryAddress: JsonValue;
  id: string;
  orderStatus?: "Option1" | null;
  orderedItems: JsonValue;
  paymentMethod: JsonValue;
  timestamp: Date | null;
  totalCost: number | null;
  updatedAt: Date;
  user?: User | null;
};
