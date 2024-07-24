import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";

export type CmsContentCreateInput = {
  title?: string | null;
  body?: string | null;
  language?: LanguageWhereUniqueInput | null;
};
