import { Container, Navbar } from 'react-bootstrap';
import { SideBarLinks } from './SideBarLinks';
import RecurateLogo from '../../assets/images/recurate.svg';
import '../../stylesheets/sidebar.scss';

export const SideBar = () => (
  <Navbar expand="lg" variant="dark">
    <Container>
      <img className="recurate-logo" src={RecurateLogo} alt="React Logo" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <SideBarLinks />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
