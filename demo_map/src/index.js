import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import UserStore from "./store/UserStore";
import OrgStore from "./store/OrgStore";
import AdminOrgStore from "./store/AdminOrgStore";

export const Context = createContext(null);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        organization: new OrgStore(),
        admin_organization: new AdminOrgStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
