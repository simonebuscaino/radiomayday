import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image, ButtonGroup, Button, ToggleButton, Nav} from "react-bootstrap";
import "./ChiSiamoScreen.scss";
import { ArrowRight, Clock, ClockFill, HourglassBottom, HourglassTop } from 'react-bootstrap-icons';

function ChiSiamoScreen () {
    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1 class="p-2 bg-gradient text-white">Chi siamo</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                <Col md="5">
                    <Image src="/img/TroppFunRadio_locandinaPresentazioneUfficiale.jpeg" width="100%" />
                </Col>
                <Col md="7" className="text-start">
                    <h4>Un progetto rivoluzionario e coraggioso.</h4>
                    <p>
                        <strong>Tropp Fun Radio</strong> è nata nella Città di Sarno, a seguito del concorso LIBERA LA TUA CREATIVITÀ’ tenutosi Giovedì 14 luglio 2020 presso i giardini di Villa Lanzara. 
                        Nasce come  Radio interscolastica che offre corsi  di radio  gratuiti ai ragazzi  del territorio (conduzione, regia, djing,  ecc.) e raccoglie da  subito il pieno consenso delle Scuole locali  e di tanti amici imprenditori che hanno deciso di sostenere e di far crescere l’iniziativa. In seguito grazie alla fusone con l’emittente <strong>RRC</strong>, acquisisce la possibilità tramite concessione ministeriale di trasmettere anche in DAB+ (Digital Audio Broadcasting) in tutta la regione Campania.<br/>
                        Lo staff di Tropp Fun Radio è  composto da ragazzi provenienti dai corsi di formazione (giovanissimi), ma anche da persone con  esperienza in ambito radiofonico che collaborano da tutta Italia, tutti pronti a portare una ventata di aria fresca nell’ambito dell’entertainement.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default ChiSiamoScreen