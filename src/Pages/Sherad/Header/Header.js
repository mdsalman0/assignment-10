import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import travel from '../../../Image/icon/travel.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSingOut = ()=>{
        signOut(auth);
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='shadow p-3 mb-5 bg-body rounded'>
                <Container>
                    <Navbar.Brand style={{color:'black'}} as={Link} to="/"><img width={50} src={travel} alt="" /></Navbar.Brand>
                    <Navbar.Toggle style={{background:'black'}} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{color:'black'}} as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link style={{color:'black'}} as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user? <button onClick={handleSingOut} style={{background:'none'}} className='rounded border border-success'>SingOut</button>:
                            <Nav.Link style={{color:'black'}} as={Link} to="/login">Login</Nav.Link>
                        }

                        <Nav.Link style={{color:'black'}}  eventKey={2} as={Link} to="/aboutMe">
                        AboutMe
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;