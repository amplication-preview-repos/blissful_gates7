import { ItemUpdateManyWithoutRestaurantsInput } from "./ItemUpdateManyWithoutRestaurantsInput";
import { InputJsonValue } from "../../types";

export type RestaurantUpdateInput = {
  contactPhone?: string | null;
  description?: string | null;
  items?: ItemUpdateManyWithoutRestaurantsInput;
  location?: InputJsonValue;
  name?: string | null;
  rating?: number | null;
};
