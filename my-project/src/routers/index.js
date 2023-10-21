import React, { useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import LayoutAdmin from "../pages/layout";
import RouterPageAdmin from "../routers/routerPageAdmin";
import PageLogin from "../pages/users/pageLogin";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Routers(props) {

  const history = useHistory();
  const token = localStorage.getItem("token");
  const pathname = history.location.pathname;
  useEffect(() => {
    if (token === null) {
      history.push("/login");
    } else {
      history.push("/user");
    }
  }, [pathname]);

  return (
    <Switch>
      <Route path="/user">
        <LayoutAdmin>
          <RouterPageAdmin />
        </LayoutAdmin>
      </Route>
      <Route path="/login" component={PageLogin}></Route>
    </Switch>
  );
}
