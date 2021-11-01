import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Dashboard } from '../../assets/images/dashboard.svg';
import { ReactComponent as Submissions } from '../../assets/images/submission.svg';
import { ReactComponent as Billing } from '../../assets/images/billing.svg';
import { ReactComponent as Templates } from '../../assets/images/template.svg';
import { ReactComponent as Settings } from '../../assets/images/settings.svg';
import { ReactComponent as Help } from '../../assets/images/help.svg';
import { ReactComponent as ReviewPayments } from '../../assets/images/review-payments.svg';
import { ReactComponent as ReviewImages } from '../../assets/images/review-images.svg';
import urls from '../../urls';

export const SideBarLinks = () => {
  const userRole = 'merchant';
  return (
    <Nav className="me-auto">
      {userRole === 'merchant' ? (
        <>
          <hr />
          <NavLink exact to={urls.dashboard}>
            <Dashboard />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to={urls.submissions}>
            <Submissions />
            <span>Submissions</span>
          </NavLink>
          <NavLink to={urls.billings}>
            <Billing />
            <span>Billings</span>
          </NavLink>
          <NavLink to={urls.templates}>
            <Templates />
            <span>Templates</span>
          </NavLink>
          <hr />

          <NavLink to={urls.shops}>
            <Settings />
            <span>Settings</span>
          </NavLink>
          <NavLink to={urls.help}>
            <Help />
            <span>Helps</span>
          </NavLink>
          <NavLink to={urls.status}>
            <span>Status</span>
          </NavLink>
        </>
      ) : null}

      {userRole === 'merchant' ? (
        <>
          <span className="admin-span"> Super Admin Options </span>
          <NavLink to="/payments">
            <ReviewPayments />
            <span>Review Payments</span>
          </NavLink>

          <NavLink to="/images">
            <ReviewImages />
            <span>Review Images</span>
          </NavLink>
          <hr />
        </>
      ) : null}
    </Nav>
  );
};
