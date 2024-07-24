import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LeadTitle } from "../lead/LeadTitle";
import { CmsContentTitle } from "../cmsContent/CmsContentTitle";

export const LanguageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="code" source="code" />
        <ReferenceArrayInput
          source="leads"
          reference="Lead"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeadTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="cmsContents"
          reference="CmsContent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CmsContentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
