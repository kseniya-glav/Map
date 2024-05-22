import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/AppRouter";
import "./App.css";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { check } from "../http/userAPI";
import Loader from "../components/UI/loader/Loader";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(
        (data) => {
          user.setUser(data);
          user.setIsAuth(true);
        },
        () => {
          user.setUser({});
          user.setIsAuth(false);
        }
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
