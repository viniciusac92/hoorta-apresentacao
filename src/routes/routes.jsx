import {Switch, Route} from "react-router-dom";
// Junia Update
// Pages
import Tests from "../pages/Tests";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Store from "../pages/Store";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />

			<Route exact path="/login" component={Login} />

			<Route exact path="/register" component={Register} />

			<Route exact path="/dashboard" component={Dashboard} />

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
