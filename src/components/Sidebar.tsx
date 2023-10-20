import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/esm/Nav'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <Navbar sticky='top' className='sidebar'>
      <Nav.Item>
        <Nav.Link className='sidebar-link' as={NavLink} to='/arrivals'>Search New Arrivals!</Nav.Link>
      </Nav.Item>
    </Navbar>
  )
}