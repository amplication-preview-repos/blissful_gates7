import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <SelectInput
          source="orderStatus"
          label="orderStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <div />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="totalCost" source="totalCost" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
