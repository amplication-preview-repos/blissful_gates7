import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RestaurantWhereInput = {
  contactPhone?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  location?: JsonFilter;
  name?: StringNullableFilter;
  rating?: FloatNullableFilter;
};
