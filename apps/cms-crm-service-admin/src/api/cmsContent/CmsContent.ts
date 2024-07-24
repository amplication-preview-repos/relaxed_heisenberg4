import { Language } from "../language/Language";

export type CmsContent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  body: string | null;
  language?: Language | null;
};
