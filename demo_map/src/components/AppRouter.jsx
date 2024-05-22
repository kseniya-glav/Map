import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { userRoutes, editorRoutes, adminRoutes } from "../router/routes";
import { Context } from "../index";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  const route = () => {
    if (user.user?.role) {
      switch (user.user.role) {
        case "admin":
          return template(adminRoutes);
        case "editor":
          return template(editorRoutes);
        case "user":
          return template(userRoutes);
        default:
          return template(userRoutes);
      }
    }
    return template(userRoutes);
  };

  const template = (selectedRouter) => {
    return (
      <Routes>
        {selectedRouter.map((route) => (
          <Route element={route.element} path={route.path} key={route.path} />
        ))}
        <Route path="*" element={<Navigate to="/map" />} />
      </Routes>
    );
  };

  return route();
});

export default AppRouter;
