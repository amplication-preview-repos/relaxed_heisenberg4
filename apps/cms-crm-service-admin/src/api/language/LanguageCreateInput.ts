import { LeadCreateNestedManyWithoutLanguagesInput } from "./LeadCreateNestedManyWithoutLanguagesInput";
import { CmsContentCreateNestedManyWithoutLanguagesInput } from "./CmsContentCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  name?: string | null;
  code?: string | null;
  leads?: LeadCreateNestedManyWithoutLanguagesInput;
  cmsContents?: CmsContentCreateNestedManyWithoutLanguagesInput;
};
