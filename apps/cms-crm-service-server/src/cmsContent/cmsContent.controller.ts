import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CmsContentService } from "./cmsContent.service";
import { CmsContentControllerBase } from "./base/cmsContent.controller.base";

@swagger.ApiTags("cmsContents")
@common.Controller("cmsContents")
export class CmsContentController extends CmsContentControllerBase {
  constructor(
    protected readonly service: CmsContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
