import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ItemCreateInput = {
  availabilityStatus?: boolean | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  promoActive?: boolean | null;
  promoPrice?: number | null;
  rating?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
