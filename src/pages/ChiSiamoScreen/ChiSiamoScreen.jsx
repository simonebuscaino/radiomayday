import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image, ButtonGroup, Button, ToggleButton, Nav} from "react-bootstrap";
import "./ChiSiamoScreen.scss";
import { ArrowRight, Clock, ClockFill, HourglassBottom, HourglassTop } from 'react-bootstrap-icons';

function ChiSiamoScreen () {
    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1 className="p-2 bg-gradient text-white">Chi siamo</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                <Col md="5">
                    <Image src="/img/TroppFunRadio_locandinaPresentazioneUfficiale.jpeg" width="100%" />
                </Col>
                <Col md="7" className="text-start">
                    <h4>TROPP FUN RADIO, PRIMA RADIO INTERSCOLASTICA D'ITALIA</h4>
                    <p>
                        Nasce nella Città di Sarno, a seguito del concorso LIBERA LA TUA CREATIVITÀ' tenutosi Giovedì 14 luglio 2022 presso i giardini di Villa Lanzara.
                        Grazie alla fusione con l'emittente RRC, acquisisce la possibilità tramite concessione ministeriale di trasmettere anche in DAB+ (Digital Audio Broadcasting) in tutta la regione della Campania allargando ulteriormente i propri orizzonti e la possibilità di essere ascoltata anche nelle auto di nuova generazione (oltre che tramite app gratuita, sito ed Alexa).<br/><br/>
                        TROPP FUN RADIO offre corsi di radio gratuiti ai ragazzi del territorio (conduzione, regia, djing, ecc.) condotti da esperti del campo raccogliendo da subito il pieno consenso delle scuole locali e di tanti amici imprenditori che hanno deciso di sostenere e di far crescere l'iniziativa.<br/><br/>
                        Lo staff è composto da ragazzi provenienti dai corsi di formazione (giovanissimi), ma anche da persone con provata esperienza in ambito radiofonico che collaborano da varie regioni d'Italia, tutti pronti a portare una ventata di aria fresca nell'ambito dell'entertainement.<br/><br/>
                        Lo staff ha avuto l'opportunità di prendere parte al 73esimo FESTIVAL DI SANREMO, offrendo uno stage al proprio staff che ha avuto l'opportunità di potersi confrontare con autori e pittori della sezione "writers" di cui hanno curato ogni  dettaglio, ma anche di entrare in contatto con tanti artisti dello showbiz, tra cui i partecipanti della kermesse canora tenutasi dal 07/02/23 al 11/02/23.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default ChiSiamoScreen