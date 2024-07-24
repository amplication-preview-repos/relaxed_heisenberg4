import { LeadUpdateManyWithoutLanguagesInput } from "./LeadUpdateManyWithoutLanguagesInput";
import { CmsContentUpdateManyWithoutLanguagesInput } from "./CmsContentUpdateManyWithoutLanguagesInput";

export type LanguageUpdateInput = {
  name?: string | null;
  code?: string | null;
  leads?: LeadUpdateManyWithoutLanguagesInput;
  cmsContents?: CmsContentUpdateManyWithoutLanguagesInput;
};
