import * as graphql from "@nestjs/graphql";
import { TranslateContentDto } from "../translation/TranslateContentDto";
import { TranslationService } from "./translation.service";

export class TranslationResolver {
  constructor(protected readonly service: TranslationService) {}

  @graphql.Mutation(() => String)
  async TranslateContent(
    @graphql.Args()
    args: TranslateContentDto
  ): Promise<string> {
    return this.service.TranslateContent(args);
  }
}
