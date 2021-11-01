import { Route, Switch } from 'react-router-dom';
import { Login } from '../containers/Login';
import urls from '../urls';

export const UnauthenticatedRoutes = () => (
  <Switch>
    <Route exact path={[urls.default, urls.login]} component={Login} />
    <Route exact path={urls.signup} component={Login} />
    <Route exact path={urls.forgotPassword} component={Login} />
  </Switch>
);
