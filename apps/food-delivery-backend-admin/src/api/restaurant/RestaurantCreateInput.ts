import { ItemCreateNestedManyWithoutRestaurantsInput } from "./ItemCreateNestedManyWithoutRestaurantsInput";
import { InputJsonValue } from "../../types";

export type RestaurantCreateInput = {
  contactPhone?: string | null;
  description?: string | null;
  items?: ItemCreateNestedManyWithoutRestaurantsInput;
  location?: InputJsonValue;
  name?: string | null;
  rating?: number | null;
};
