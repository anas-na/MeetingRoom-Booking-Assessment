import { Navbar, Container, Nav  } from 'react-bootstrap'
import '../Stylings/NavBar.css'

const NavBar = () => {
    return (
        <>
    <Navbar bg="dark" variant="dark" className= 'navBar '>
    <Container>
    <Nav className="me-auto navInfo">
      <Nav.Link className='link' to="/">Rooms</Nav.Link>
      <Nav.Link className='link' to="/bookings">Bookings</Nav.Link>
      <Nav.Link className='link' to="/newroom">New Room</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </>
    )
}

export default NavBar;