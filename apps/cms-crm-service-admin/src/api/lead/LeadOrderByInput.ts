import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  geography?: SortOrder;
  modeOfContact?: SortOrder;
  company?: SortOrder;
  languageId?: SortOrder;
};
