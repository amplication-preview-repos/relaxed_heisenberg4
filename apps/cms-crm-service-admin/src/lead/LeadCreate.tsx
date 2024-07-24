import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LanguageTitle } from "../language/LanguageTitle";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
        <NumberInput step={1} label="phone" source="phone" />
        <TextInput label="geography" source="geography" />
        <TextInput label="modeOfContact" source="modeOfContact" />
        <TextInput label="company" source="company" />
        <ReferenceInput
          source="language.id"
          reference="Language"
          label="Language"
        >
          <SelectInput optionText={LanguageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
