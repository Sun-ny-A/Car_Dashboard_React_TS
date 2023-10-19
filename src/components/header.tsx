import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Header(): JSX.Element {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="heading-container">
        <Navbar.Brand href="#home">Car Inventory Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="#favorites" className="white-text">Favorites</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#logout" className="white-text">Logout</Nav.Link>
          </Nav.Item>
          <Navbar.Text>
            Signed in as: <a href="#login">Senait Abate</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

