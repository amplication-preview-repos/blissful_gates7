import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  deliveryAddress?: JsonFilter;
  id?: StringFilter;
  orderStatus?: "Option1";
  orderedItems?: JsonFilter;
  paymentMethod?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
  totalCost?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
