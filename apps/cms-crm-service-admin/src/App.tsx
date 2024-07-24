import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LanguageList } from "./language/LanguageList";
import { LanguageCreate } from "./language/LanguageCreate";
import { LanguageEdit } from "./language/LanguageEdit";
import { LanguageShow } from "./language/LanguageShow";
import { CmsContentList } from "./cmsContent/CmsContentList";
import { CmsContentCreate } from "./cmsContent/CmsContentCreate";
import { CmsContentEdit } from "./cmsContent/CmsContentEdit";
import { CmsContentShow } from "./cmsContent/CmsContentShow";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CMS_CRM_Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Language"
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
        <Resource
          name="CmsContent"
          list={CmsContentList}
          edit={CmsContentEdit}
          create={CmsContentCreate}
          show={CmsContentShow}
        />
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
