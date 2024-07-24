import { Injectable } from "@nestjs/common";
import { TranslateContentDto } from "../translation/TranslateContentDto";

@Injectable()
export class TranslationService {
  constructor() {}
  async TranslateContent(args: TranslateContentDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
