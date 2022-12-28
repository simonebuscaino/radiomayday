import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function Footer () {

    return (
        <Container fluid className="bg-secondary containerFooter">
        {/* <Row>
            <Col>
                <h4>Footer</h4>
            </Col>
            <Col>
                <h4>Footer</h4>
            </Col>
            <Col style={{textAlign: "left"}}>
                <h4 style={{borderBottom: "3px solid white"}}>Contatti</h4>
                <p><b>Indirizzo: </b>Via Mulitiello 105/107, Striano, NA, 80040</p>
                <p><b>Email: </b><a href="malito:webrrc1@gmail.com" style={{color: "white", textDecoration: "none"}}>webrrc1@gmail.com</a></p>
                <p><b>Cellulare: </b><a href="tel:3470348618" style={{color: "white", textDecoration: "none"}}>3470348618</a></p>
            </Col>
        </Row> */}
        <Row>
            <Col className="text-start">© Tropp Fun Radio – C.F. e P.IVA 90102660637</Col>
            <Col className="text-end">Developed by <a className="text-decoration-none text-white" href="https://www.linkedin.com/in/simonebuscaino" target="_blank">Simone Buscaino</a></Col>
        </Row>
    </Container>
    )
}

export default Footer