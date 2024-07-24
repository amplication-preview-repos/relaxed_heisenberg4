import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
