import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Button from 'react-bootstrap/Button';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <Container className='mt-4 mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light  ">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="mx-auto">
                              
                                    <Link to='/category/0'>Home</Link>
                               
                                <Link href="#pricing">About</Link>
                                <Link href="#pricing">Career</Link>

                            </Nav>
 
                            <Nav>
                                {
                                    user &&
                                     
                                        <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                  
                                }

                                <Nav.Link eventKey={2} href="#memes">
                                    {user ?
                                         <Link to='/login'><Button variant="secondary">Logout</Button></Link> :

                                        <Link to='/login'>
                                             <Button variant="secondary">Login</Button>
                                       </Link>

                                    }
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;