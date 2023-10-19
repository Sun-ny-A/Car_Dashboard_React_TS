import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/esm/Nav'
import { NavLink } from 'react-router-dom'

export default function sidebar() {
  return (
    <Navbar sticky='top' className='flex-column sidebar'>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/'>Home Page</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/'>New Arrivals</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/'>Contact Us</Nav.Link>
      </Nav.Item>
    </Navbar>
  )
}