import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaGuitar, FaUser } from 'react-icons/fa';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );
    return (

        <Navbar collapseOnSelect className='mb-3' expand="lg" bg="dark" variant="dark">

            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand> <Link to='/' >  <FaGuitar></FaGuitar> Learn Guitar</Link> </Navbar.Brand>


                <div className='d-lg-none'>
                    {
                        user ?
                            <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                            : <FaUser></FaUser>
                    }
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>

                        <Nav.Link href="">
                            <Form.Check
                                label="Dark Mode"
                                type="switch"
                                id="custom-switch"
                            />
                        </Nav.Link>
                        <Nav.Link href="#deets">{
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button className="ms-2" variant='outline-light' onClick={handleLogOut} >Logout</Button>
                                </>
                                :
                                <>
                                    <Button className="ms-2" variant='outline-light'> <Link to='/login'>Login</Link></Button>
                                    <Button className="ms-2" variant='outline-light'>  <Link to='/register'>Register</Link></Button>
                                </>
                        }</Nav.Link>

                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                    </OverlayTrigger>
                                        : <FaUser></FaUser>
                            }


                        </Nav.Link>

                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;