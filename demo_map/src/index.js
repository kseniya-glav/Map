import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import UserStore from "./store/UserStore";
import OrgStore from "./store/OrgStore";
import AdminOrgStore from "./store/AdminOrgStore";
import NoticeStore from "./store/NoticeStore"

export const Context = createContext(null);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <Context.Provider
    value={{
      user: new UserStore(),
      organization: new OrgStore(),
      admin_organization: new AdminOrgStore(),
      noticeStore: new NoticeStore()
    }}
  >
    <App />
  </Context.Provider>
  // </React.StrictMode>
);
