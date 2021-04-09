import { Switch, Route } from "react-router-dom";
// Junia Update
// Pages
import Tests from "../pages/Tests";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>

      <Route exact path="/login">
        login
      </Route>

      <Route exact path="/register">
        register
      </Route>

      <Route exact path="/dashboard">
        dashboard
      </Route>

      <Route exact path="/store/:id">
        store
      </Route>

      <Route exact path="/store/profile/:id">
        store - profile
      </Route>

      <Route exact path="/cart">
        cart
      </Route>

      <Route exact path="/profile">
        profile
      </Route>

      <Route exact path="/tests" component={Tests} />
    </Switch>
  );
};
export default Routes;
