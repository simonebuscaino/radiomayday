import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image, ButtonGroup, Button, ToggleButton, Nav} from "react-bootstrap";
import "./ChiSiamoScreen.scss";
import { ArrowRight, Clock, ClockFill, HourglassBottom, HourglassTop } from 'react-bootstrap-icons';

function ChiSiamoScreen () {
    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1>Chi siamo</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                <Col md="8" className="text-start">
                    <h4>A Sarno è nata la prima Radio Interscolastica d’Italia.</h4>
                    <p>
                        <strong><em>Giovedì 14 luglio, alle ore 20, tutti a Sarno (SA), nei giardini piccoli di Villa Lanzara</em></strong><br/><br/>
                        Un progetto rivoluzionario e coraggioso.<br/>
                        <b>Radio interscolastica</b> è nata nella Città di <b>Sarno</b>, in provincia di Salerno, già da vari mesi.<br/>
                        <b>Radio interscolastica</b> ha subito raccolto il pieno consenso delle Scuole del Territorio e di tanti amici imprenditori che hanno deciso di sostenere e di far crescere l’iniziativa.<br/>
                        <b>I corsi sono già in fase avanzata e la partecipazione per gli studenti è completamente GRATUITA.</b><br/>
                        <b>Della Radio, che si puó già ascoltare, non sono ancora noti nome e logo. Nome e logo, però, sono stati già scelti grazie al Concorso “LIBERA LA TUA CREATIVITÀ” e saranno svelati durante la presentazione della Radio che sarà una vera e propria festa a cui parteciperanno quanti stanno credendo in questa idea ed investendo nel futuro dei nostri ragazzi. Conosceremo i volti di chi ci sta mettendo impegno e passione e condivideremo programmi e progettualità.</b><br/>
                        <b>L’<em>happening</em> si svolgerà il 14 luglio, alle ore 20:00, a Sarno (SA), negli splendidi giardini piccoli di Villa Lanzara.</b><br/>
                        Un momento importante di cultura e socialità, di dialogo e di confronto. Vi aspettiamo.<br/><br/>
                        <b>Lo Staff organizzativo<br/>
                        Per info e contatti: 333.9678720</b>
                    </p>
                </Col>
                <Col md="4">
                    <Image src="/img/chi-siamo.jpeg" width="100%" />
                </Col>
            </Row>
        </Container>
    )
}

export default ChiSiamoScreen