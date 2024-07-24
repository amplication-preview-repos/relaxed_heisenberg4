import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CmsContentServiceBase } from "./base/cmsContent.service.base";

@Injectable()
export class CmsContentService extends CmsContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
