import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  addresses?: InputJsonValue;
  avatar?: InputJsonValue;
  dateOfRegistration?: Date | null;
  email?: string | null;
  favoriteItems?: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  paymentMethods?: InputJsonValue;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
