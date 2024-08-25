import { JsonValue } from "type-fest";
import { Order } from "../order/Order";

export type User = {
  addresses: JsonValue;
  avatar: JsonValue;
  createdAt: Date;
  dateOfRegistration: Date | null;
  email: string | null;
  favoriteItems: JsonValue;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  paymentMethods: JsonValue;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
