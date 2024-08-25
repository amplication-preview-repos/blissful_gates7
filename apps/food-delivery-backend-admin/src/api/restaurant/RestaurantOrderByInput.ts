import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  contactPhone?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
