import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  availabilityStatus?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  promoActive?: SortOrder;
  promoPrice?: SortOrder;
  rating?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
};
