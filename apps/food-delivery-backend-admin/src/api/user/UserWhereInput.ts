import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  addresses?: JsonFilter;
  avatar?: JsonFilter;
  dateOfRegistration?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  favoriteItems?: JsonFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  paymentMethods?: JsonFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
};
