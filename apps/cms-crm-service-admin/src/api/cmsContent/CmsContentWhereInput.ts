import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";

export type CmsContentWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  body?: StringNullableFilter;
  language?: LanguageWhereUniqueInput;
};
