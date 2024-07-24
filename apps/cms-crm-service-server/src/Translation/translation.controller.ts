import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TranslationService } from "./translation.service";
import { TranslateContentDto } from "../translation/TranslateContentDto";

@swagger.ApiTags("translations")
@common.Controller("translations")
export class TranslationController {
  constructor(protected readonly service: TranslationService) {}

  @common.Post("/translate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TranslateContent(
    @common.Body()
    body: TranslateContentDto
  ): Promise<string> {
        return this.service.TranslateContent(body);
      }
}
