
import { Navbar, Nav, Container} from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
<<<<<<< Updated upstream
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png' 
=======
>>>>>>> Stashed changes

const Header = () =>  {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
<<<<<<< Updated upstream
                <LinkContainer to='/'>
                <Navbar.Brand>
                    <img src={logo} alt='Proshop'/>
                    ProShop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                      <LinkContainer to='/cart'>
                        <Nav.Link><FaShoppingCart/> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link><FaUser/> Sign In</Nav.Link>
                        </LinkContainer>
=======
                <Navbar.Brand href='/'>ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaShoppingCart/> Cart</Nav.Link>
                        <Nav.Link href='/login'><FaUser/> Sign In</Nav.Link>
>>>>>>> Stashed changes
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header