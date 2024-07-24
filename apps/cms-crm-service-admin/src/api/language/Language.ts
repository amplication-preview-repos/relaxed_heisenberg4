import { Lead } from "../lead/Lead";
import { CmsContent } from "../cmsContent/CmsContent";

export type Language = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  code: string | null;
  leads?: Array<Lead>;
  cmsContents?: Array<CmsContent>;
};
