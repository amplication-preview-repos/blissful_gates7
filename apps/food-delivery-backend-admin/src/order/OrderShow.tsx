import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryAddress" source="deliveryAddress" />
        <TextField label="ID" source="id" />
        <TextField label="orderStatus" source="orderStatus" />
        <TextField label="orderedItems" source="orderedItems" />
        <TextField label="paymentMethod" source="paymentMethod" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="totalCost" source="totalCost" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
