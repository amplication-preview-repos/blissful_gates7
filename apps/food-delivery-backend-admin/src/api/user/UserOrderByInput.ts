import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  addresses?: SortOrder;
  avatar?: SortOrder;
  createdAt?: SortOrder;
  dateOfRegistration?: SortOrder;
  email?: SortOrder;
  favoriteItems?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  paymentMethods?: SortOrder;
  phoneNumber?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
