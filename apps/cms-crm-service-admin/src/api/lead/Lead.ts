import { Language } from "../language/Language";

export type Lead = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phone: number | null;
  geography: string | null;
  modeOfContact: string | null;
  company: string | null;
  language?: Language | null;
};
