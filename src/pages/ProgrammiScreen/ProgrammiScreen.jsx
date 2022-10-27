/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import {Container, Row, Col, Image} from "react-bootstrap";

function ProgrammiScreen() {
    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1>Programmi</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <iframe width="100%" height="250px" src="https://www.mixcloud.com/widget/follow/?u=%2FRRCampania%2F" frameBorder="0"></iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default ProgrammiScreen
