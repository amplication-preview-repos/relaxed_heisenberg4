/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Language as PrismaLanguage,
  Lead as PrismaLead,
  CmsContent as PrismaCmsContent,
} from "@prisma/client";

export class LanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LanguageCountArgs, "select">): Promise<number> {
    return this.prisma.language.count(args);
  }

  async languages(
    args: Prisma.LanguageFindManyArgs
  ): Promise<PrismaLanguage[]> {
    return this.prisma.language.findMany(args);
  }
  async language(
    args: Prisma.LanguageFindUniqueArgs
  ): Promise<PrismaLanguage | null> {
    return this.prisma.language.findUnique(args);
  }
  async createLanguage(
    args: Prisma.LanguageCreateArgs
  ): Promise<PrismaLanguage> {
    return this.prisma.language.create(args);
  }
  async updateLanguage(
    args: Prisma.LanguageUpdateArgs
  ): Promise<PrismaLanguage> {
    return this.prisma.language.update(args);
  }
  async deleteLanguage(
    args: Prisma.LanguageDeleteArgs
  ): Promise<PrismaLanguage> {
    return this.prisma.language.delete(args);
  }

  async findLeads(
    parentId: string,
    args: Prisma.LeadFindManyArgs
  ): Promise<PrismaLead[]> {
    return this.prisma.language
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leads(args);
  }

  async findCmsContents(
    parentId: string,
    args: Prisma.CmsContentFindManyArgs
  ): Promise<PrismaCmsContent[]> {
    return this.prisma.language
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .cmsContents(args);
  }
}
