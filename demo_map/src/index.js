import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import OrgStore from "./store/OrgStore";

export const Context = createContext(null);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        organization: new OrgStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
