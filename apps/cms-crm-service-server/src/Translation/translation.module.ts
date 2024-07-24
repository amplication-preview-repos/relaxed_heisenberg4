import { Module } from "@nestjs/common";
import { TranslationService } from "./translation.service";
import { TranslationController } from "./translation.controller";
import { TranslationResolver } from "./translation.resolver";

@Module({
  controllers: [TranslationController],
  providers: [TranslationService, TranslationResolver],
  exports: [TranslationService],
})
export class TranslationModule {}
