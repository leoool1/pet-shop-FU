import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to='/' className='navbar-brand'>Pet Shop</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Trang Chủ</NavLink>
                        <NavLink to='/pets' className='nav-link'>Thú Cưng</NavLink>
                        <NavLink to='/accessories' className='nav-link'>Phụ Kiện</NavLink>
                        <NavLink to='/blogs' className='nav-link'>Blog</NavLink>
                        <NavLink to='/contact' className='nav-link'>Liên hệ</NavLink>
                    </Nav>
                    <Nav>
                        <button className='btn-login'>Login</button>
                        <button className='btn-signup'>Sign Up</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
        ;
}

export default Header;