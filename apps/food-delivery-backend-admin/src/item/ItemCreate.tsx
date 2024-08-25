import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="availabilityStatus" source="availabilityStatus" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <BooleanInput label="promoActive" source="promoActive" />
        <NumberInput label="promoPrice" source="promoPrice" />
        <NumberInput label="rating" source="rating" />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="Restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
