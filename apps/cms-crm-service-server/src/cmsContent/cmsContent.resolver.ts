import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CmsContentResolverBase } from "./base/cmsContent.resolver.base";
import { CmsContent } from "./base/CmsContent";
import { CmsContentService } from "./cmsContent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CmsContent)
export class CmsContentResolver extends CmsContentResolverBase {
  constructor(
    protected readonly service: CmsContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
