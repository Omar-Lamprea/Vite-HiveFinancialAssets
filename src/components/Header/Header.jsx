import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo_hive.webp'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg">
        <Container className='container-md'>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" className='logo'/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className='btn-hamburger'/>
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="#">TEAM</Nav.Link>
              <Nav.Link href="#">NEWS & EVENTS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header