import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  deliveryAddress?: SortOrder;
  id?: SortOrder;
  orderStatus?: SortOrder;
  orderedItems?: SortOrder;
  paymentMethod?: SortOrder;
  timestamp?: SortOrder;
  totalCost?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
