import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  discount?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
