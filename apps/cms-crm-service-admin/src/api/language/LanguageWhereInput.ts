import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";
import { CmsContentListRelationFilter } from "../cmsContent/CmsContentListRelationFilter";

export type LanguageWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  code?: StringNullableFilter;
  leads?: LeadListRelationFilter;
  cmsContents?: CmsContentListRelationFilter;
};
