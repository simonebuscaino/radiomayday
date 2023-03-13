import React, {useState, useEffect} from "react";
import {Navbar as NavBar, Col, Row, Nav, Image, Container } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import { Facebook, Instagram } from 'react-bootstrap-icons';

function Navbar () {
    // Mostrare o no il pulsante di Scroll
    const [isShrunk, setIsShrunk] = useState(false);

  // Mostra il pulsante quando la pagina viene scorri fino a una data distanza
  const toggleShrunk = () => {
    if (window.pageYOffset > 10) {
        setIsShrunk(true);
    } else {
        setIsShrunk(false);
    }
  };

  // useEffect per toggleVisibility
  useEffect(() => {
    window.addEventListener("scroll", toggleShrunk);
  }, []);

    return (
        <Container fluid>
        <Row className={isShrunk ? "containerNavbar border-bottom border-primary border-2 shrunk" : "pt-2 pb-2 border-bottom border-primary border-2 containerNavbar"}>
            <Col xs>
                <NavBar collapseOnSelect expand="lg" variant="dark">
                    <NavBar.Brand href="/" className="p-0">
                        <Image className="logo" src="logo_white.png" width="120px"/>
                    </NavBar.Brand>
                    <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavBar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fs-5">
                            <LinkContainer to="/" exact="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/chi-siamo" exact="/chi-siamo">
                                <Nav.Link>Chi siamo</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/palinsesto" exact="/palinsesto">
                                <Nav.Link>Palinsesto</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/staff" exact="/staff">
                                <Nav.Link>Staff</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/corsi" exact="/corsi">
                                <Nav.Link>Corsi</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to="/programmi" exact="/programmi">
                                <Nav.Link>Programmi</Nav.Link>
                            </LinkContainer> */}
                        </Nav>
                    </NavBar.Collapse>
                </NavBar>
            </Col>
            <Col className="text-end">
                <a href="https://www.instagram.com/troppfunradio/" target="_new" className="text-decoration-none text-white"><Instagram size="18" className="mx-2"/></a>
                <a href="https://www.facebook.com/troppfunradioofficial/" target="_new" className="text-decoration-none text-white"><Facebook size="18" className="mx-2"/></a>
            </Col>
        </Row>
    </Container>
    )
}

export default Navbar