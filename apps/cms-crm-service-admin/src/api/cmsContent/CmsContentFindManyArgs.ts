import { CmsContentWhereInput } from "./CmsContentWhereInput";
import { CmsContentOrderByInput } from "./CmsContentOrderByInput";

export type CmsContentFindManyArgs = {
  where?: CmsContentWhereInput;
  orderBy?: Array<CmsContentOrderByInput>;
  skip?: number;
  take?: number;
};
