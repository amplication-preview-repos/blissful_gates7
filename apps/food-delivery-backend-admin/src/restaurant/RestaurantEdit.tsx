import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactPhone" source="contactPhone" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="items"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="name" source="name" />
        <NumberInput label="rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
