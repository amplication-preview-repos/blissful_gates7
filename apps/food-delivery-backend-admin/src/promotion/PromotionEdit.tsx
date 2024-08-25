import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discount" source="discount" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
