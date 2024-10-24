import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img id='logo' src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png" alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profiles</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" id='inp' placeholder='Enter Username you want to search'/>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavBar;