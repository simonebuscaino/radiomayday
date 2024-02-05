import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image, ButtonGroup, Button, ToggleButton, Nav} from "react-bootstrap";
import "./Sanremo.scss";
import { ArrowRight, Clock, ClockFill, HourglassBottom, HourglassTop } from 'react-bootstrap-icons';

function Sanremo () {
    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1 className="p-2 bg-gradient text-white">Sanremo 2024</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-3 justify-content-md-center">
                <Col md="8" className="text-start">
					<h3><strong>Tropp Fun Radio al Festival di Sanremo 2024: Un'Esperienza Unica di Musica e Intrattenimento</strong><em>&nbsp;</em></h3>
                    
                    <p>
        Si rinnova l’appuntamento di Tropp Fun Radio torna al festival di Sanremo, questa volta saremo ancor di più al centro
        dell'azione con una postazione presso nella sezione Writers al Palafiori. Un'esperienza indimenticabile, con interviste
        esclusive, collegamenti in diretta e una serie di sorprese preparate dagli inviati sul posto e dallo studio centrale.
      </p>
      <p>
        Gli appassionati potranno godere di interviste esclusive che offriranno uno sguardo dietro le quinte, rivelando storie e
        dettagli intriganti sulla creazione delle canzoni e sulle emozioni degli artisti. I collegamenti in diretta trasporteranno
        gli spettatori direttamente nel cuore dell'azione, offrendo un'esperienza immersiva che avvicina il pubblico alle emozioni
        uniche del Festival di Sanremo.
      </p>
      <p>
        Ma le sorprese non finiscono qui. Tropp Fun Radio ha promesso di regalare momenti indimenticabili grazie a iniziative
        speciali e ospiti sorpresa. Con uno sguardo attento agli avvenimenti sul palco e dietro le quinte, gli inviati di Tropp
        Fun Radio condivideranno con il pubblico il brivido dell'evento in tempo reale.
      </p>
      <p>
        Dall'inizio alla fine del Festival di Sanremo 2024, Tropp Fun Radio si impegna a mantenere il pubblico connesso e coinvolto.
        Sia che siate appassionati di musica o semplicemente alla ricerca di divertimento, la copertura di Tropp Fun Radio promette
        di soddisfare ogni aspettativa.
      </p>
      <p>
        In attesa di un'esperienza unica e entusiasmante, l'invito è chiaro: "Stay tuned" per immergersi completamente nel mondo
        affascinante e elettrizzante del Festival di Sanremo con Tropp Fun Radio.
      </p>
                </Col>
                <Col md="4">
                <img
        src="/img/loc_sanremo.jpg"
        alt="Locandina Festival di Sanremo 2024 - Tropp Fun Radio"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
                </Col>
            </Row>
        </Container>
    )
}

export default Sanremo