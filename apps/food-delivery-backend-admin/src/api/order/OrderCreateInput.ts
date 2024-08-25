import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  deliveryAddress?: InputJsonValue;
  orderStatus?: "Option1" | null;
  orderedItems?: InputJsonValue;
  paymentMethod?: InputJsonValue;
  timestamp?: Date | null;
  totalCost?: number | null;
  user?: UserWhereUniqueInput | null;
};
