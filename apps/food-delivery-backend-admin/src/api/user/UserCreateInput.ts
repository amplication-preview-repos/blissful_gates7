import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  addresses?: InputJsonValue;
  avatar?: InputJsonValue;
  dateOfRegistration?: Date | null;
  email?: string | null;
  favoriteItems?: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  paymentMethods?: InputJsonValue;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  username: string;
};
