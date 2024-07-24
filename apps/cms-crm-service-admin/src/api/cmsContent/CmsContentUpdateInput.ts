import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";

export type CmsContentUpdateInput = {
  title?: string | null;
  body?: string | null;
  language?: LanguageWhereUniqueInput | null;
};
