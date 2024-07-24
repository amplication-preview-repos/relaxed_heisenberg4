/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { LeadCreateNestedManyWithoutLanguagesInput } from "./LeadCreateNestedManyWithoutLanguagesInput";
import { Type } from "class-transformer";
import { CmsContentCreateNestedManyWithoutLanguagesInput } from "./CmsContentCreateNestedManyWithoutLanguagesInput";

@InputType()
class LanguageCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: () => LeadCreateNestedManyWithoutLanguagesInput,
  })
  @ValidateNested()
  @Type(() => LeadCreateNestedManyWithoutLanguagesInput)
  @IsOptional()
  @Field(() => LeadCreateNestedManyWithoutLanguagesInput, {
    nullable: true,
  })
  leads?: LeadCreateNestedManyWithoutLanguagesInput;

  @ApiProperty({
    required: false,
    type: () => CmsContentCreateNestedManyWithoutLanguagesInput,
  })
  @ValidateNested()
  @Type(() => CmsContentCreateNestedManyWithoutLanguagesInput)
  @IsOptional()
  @Field(() => CmsContentCreateNestedManyWithoutLanguagesInput, {
    nullable: true,
  })
  cmsContents?: CmsContentCreateNestedManyWithoutLanguagesInput;
}

export { LanguageCreateInput as LanguageCreateInput };
