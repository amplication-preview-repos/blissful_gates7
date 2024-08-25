import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="addresses" source="addresses" />
        <TextField label="avatar" source="avatar" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfRegistration" source="dateOfRegistration" />
        <TextField label="Email" source="email" />
        <TextField label="favoriteItems" source="favoriteItems" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="paymentMethods" source="paymentMethods" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Order" target="userId" label="Orders">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
