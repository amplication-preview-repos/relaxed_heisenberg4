import { CmsContent as TCmsContent } from "../api/cmsContent/CmsContent";

export const CMSCONTENT_TITLE_FIELD = "title";

export const CmsContentTitle = (record: TCmsContent): string => {
  return record.title?.toString() || String(record.id);
};
