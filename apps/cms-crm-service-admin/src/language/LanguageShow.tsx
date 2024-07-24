import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LANGUAGE_TITLE_FIELD } from "./LanguageTitle";

export const LanguageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="code" source="code" />
        <ReferenceManyField reference="Lead" target="languageId" label="Leads">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="email" source="email" />
            <TextField label="phone" source="phone" />
            <TextField label="geography" source="geography" />
            <TextField label="modeOfContact" source="modeOfContact" />
            <TextField label="company" source="company" />
            <ReferenceField
              label="Language"
              source="language.id"
              reference="Language"
            >
              <TextField source={LANGUAGE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CmsContent"
          target="languageId"
          label="CMS Contents"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="body" source="body" />
            <ReferenceField
              label="Language"
              source="language.id"
              reference="Language"
            >
              <TextField source={LANGUAGE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
