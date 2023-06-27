import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo_hive.webp'
import './Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg">
        <Container className='container-md'>
          <Link to="/" className='logo'>
            <img src={Logo} alt="" />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className='btn-hamburger'/>
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav className="items">
              <Link to="/team">TEAM</Link>
              <Link to="/events">NEWS & EVENTS</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header