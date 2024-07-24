import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CmsContentModuleBase } from "./base/cmsContent.module.base";
import { CmsContentService } from "./cmsContent.service";
import { CmsContentController } from "./cmsContent.controller";
import { CmsContentResolver } from "./cmsContent.resolver";

@Module({
  imports: [CmsContentModuleBase, forwardRef(() => AuthModule)],
  controllers: [CmsContentController],
  providers: [CmsContentService, CmsContentResolver],
  exports: [CmsContentService],
})
export class CmsContentModule {}
