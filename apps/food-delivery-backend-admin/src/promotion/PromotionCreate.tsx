import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discount" source="discount" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
