import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import travel from '../../../Image/icon/travel.png'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSingOut = ()=>{
        signOut(auth);
    }
    return (
        <header className="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='shadow p-3 bg-body rounded'>
                <Container className=''>
                    <Navbar.Brand style={{color:'black'}} as={CustomLink} to="/"><img width={50} src={travel} alt="" /></Navbar.Brand>
                    <Navbar.Toggle style={{background:'black'}} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{color:'black'}} as={CustomLink} to='/home'>Home</Nav.Link>
                        <Nav.Link style={{color:'black'}} as={CustomLink} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user? <button onClick={handleSingOut} style={{background:'none'}} className='rounded border border-success'>SingOut</button>:
                            <Nav.Link style={{color:'black'}} as={CustomLink} to="/login">Login</Nav.Link>
                        }

                        <Nav.Link style={{color:'black'}}  eventKey={2} as={CustomLink} to="/aboutMe">
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