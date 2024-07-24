import { SortOrder } from "../../util/SortOrder";

export type CmsContentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  body?: SortOrder;
  languageId?: SortOrder;
};
