import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { UnauthenticatedRoutes } from './routes/UnauthenticatedRoutes';
import './i18n';
import './App.scss';
import { SideBar } from './components/shared/SideBar';

export const App = () => (
  <Router>
    <div className="App">
      <SideBar />
      <div className="content">
        <Switch>
          <UnauthenticatedRoutes />
        </Switch>
      </div>
    </div>
    <ToastContainer />
  </Router>
);
