import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ItemWhereInput = {
  availabilityStatus?: BooleanNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  promoActive?: BooleanNullableFilter;
  promoPrice?: FloatNullableFilter;
  rating?: FloatNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
};
