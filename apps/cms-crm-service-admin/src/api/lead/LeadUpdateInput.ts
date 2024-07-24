import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";

export type LeadUpdateInput = {
  name?: string | null;
  email?: string | null;
  phone?: number | null;
  geography?: string | null;
  modeOfContact?: string | null;
  company?: string | null;
  language?: LanguageWhereUniqueInput | null;
};
