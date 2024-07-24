import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";

export type LeadWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: IntNullableFilter;
  geography?: StringNullableFilter;
  modeOfContact?: StringNullableFilter;
  company?: StringNullableFilter;
  language?: LanguageWhereUniqueInput;
};
