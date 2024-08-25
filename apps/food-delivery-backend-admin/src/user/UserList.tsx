import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
