import React from 'react'
import {duemilaventidue} from './corsi.js';
import {Container, Row, Col, Image} from 'react-bootstrap';

function CorsiScreen() {
  return (
    <>
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1 className="p-2 bg-gradient text-white">Corsi</h1>
                    <p className="text-start fs-5">
                        L'obiettivo principale del nostro progetto Radio è quello di entrare in tutte le scuole del territorio Campano ma non solo, i ragazzi sono il fulcro della nostra Mission. Insegnare a loro il mondo della Radio al fine di farli diventare dei professionisti del settore.
                    </p>
                    <p className="text-start fs-5">
                        Loro saranno i nostri futuri <b>Speaker</b>, <b>DJ</b>, <b>Registi</b>, <b>Giornalisti</b>.
                        <br/>
                        Noi siamo con i ragazzi, noi siamo quelli della generazione Z.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                {
                    duemilaventidue.map((el, index) => (
                        <Col md="3" key={index}>
                            <Row className="containerBoxStaff m-2">
                                <Image className="imgNotPadding mb-2" src={el.img} width="100%" rounded />
                                <h4><strong className="bg-gradient text-white px-2">{el.name}</strong></h4>
                                {/* <span>
                                    <Icon.Facebook size="24px" />
                                    &nbsp;&nbsp;
                                    <Icon.Instagram size="24px" />
                                </span> */}
                            </Row>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </>
  )
}

export default CorsiScreen