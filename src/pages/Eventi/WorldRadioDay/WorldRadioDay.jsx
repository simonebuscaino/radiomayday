import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image, ButtonGroup, Button, ToggleButton, Nav} from "react-bootstrap";
import "./WorldRadioDay.scss";
import { ArrowRight, Clock, ClockFill, HourglassBottom, HourglassTop } from 'react-bootstrap-icons';

function ChiSiamoScreen () {
    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1 className="p-2 bg-gradient text-white">World Radio Day 2024</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-3 justify-content-md-center">
                <Col md="10" className="text-start">
					<h3><strong>World Radio Day 2024: il 13 febbraio a Milano la giornata Mondiale della Radio si celebra insieme ai suoi protagonisti</strong><em>&nbsp;</em></h3><p>Il <strong>13 febbraio 2024</strong> torna il<strong> World Radio Day, </strong>la Giornata Mondiale della Radio istituita dall’<strong>UNESCO</strong>. L’evento, organizzato da <a href="https://www.radiospeaker.it/"><strong>Radio Speaker</strong></a>, ha l’obiettivo di celebrare il mezzo Radio in tutte le sue espressioni dando spazio alle <strong>Radio Nazionali, Areali, Web, DAB, Universitarie, In-Store e Corporate.</strong></p><p>Le più grandi <strong>Star delle Radio italiane</strong> e i protagonisti del settore si avvicenderanno in due sale contemporanee in una serie di interviste, incontri di edutainment, musica, workshop e spettacolo per festeggiare i 100 anni della Radio e condividere con il pubblico la passione per uno dei mezzi di comunicazione più amati e che ancora oggi viene scelto da milioni di ascoltatori ogni giorno.</p><p>Giunto alla sua quarta edizione, il World Radio Day si svolgerà nella suggestiva location del <strong>Talent Garden Calabiana </strong>in Via Arcivescovo Calabiana, 6 a Milano e sarà trasmesso in diretta streaming sul sito ufficiale <a href="http://www.worldradioday.it/"><strong>worldradioday.it</strong></a>. L’ingresso è gratuito per tutti e aperto al pubblico.</p><p>“<em>Dopo il successo della scorsa edizione, quest’anno replichiamo l’evento in presenza a Milano per celebrare la radio come </em><em>fonte di informazione, intrattenimento e ispirazione. Nel 2024 la Radio festeggia il suo centenario, occasione in più per onorare il suo fascino straordinario mettendo insieme i protagonisti che ogni giorno intrattengono milioni di italiani, gli editori e tutti gli ascoltatori che vorranno partecipare” </em>commenta <strong>Giorgio d’Ecclesia, Ceo &amp; Founder di Radio Speaker,&nbsp; organizzatore dell’evento</strong>.</p><p><strong>&nbsp;</strong></p><p><strong>Gli ospiti di questa edizione:</strong></p><p>Dopo due edizioni online (nel 2021 e nel 2022), ed una in presenza del 2023, il World Radio Day è il più grande evento radiofonico degli ultimi anni in Italia. Tra gli ospiti già confermati di questa nuova edizione: <strong>Linus</strong> (Radio Deejay); <strong>Albertino</strong> (m2o); <strong>Giuseppe Cruciani</strong> (Radio 24); <strong>Ringo</strong> (Virgin Radio); <strong>Federica Gentile</strong> (RTL 102.5); <strong>Lucilla Agosti</strong> (R101); <strong>WAD </strong>(Radio Deejay e m2o); <strong>Giuditta Arecco</strong> (Radio Italia);<strong>&nbsp; NICK THE NIGHTFLY</strong> (Radio Monte Carlo); <strong>Claudio Cecchetto</strong> (Radio Cecchetto); <strong>Jody Cecchetto</strong>; <strong>Marco Mazzoli</strong> (Radio 105); <strong>Gianluca Gazzoli</strong> (Radio Deejay) e molti altri ancora.</p><p><strong>Il Tema scelto dall’UNESCO per il World Radio Day 2024</strong></p><p>Il tema del World Radio Day del 2024 punta i riflettori sullo straordinario passato, sul presente rilevante e sulla promessa di un futuro dinamico della radio. L’occasione offerta dal traguardo dei 100 anni e più della Radio – si legge sul <a href="https://www.unesco.org/en/days/world-radio/radio-next-century">sito dell’UNESCO</a> – merita di essere strombazzata a tutto volume.</p><p>Il World Radio Day è realizzato con il patrocinio di Rai Radio e con la Partnership di Confindustria Radio Televisioni.</p><p><strong>Info Utili: </strong><a href="http://www.worldradioday.it/"><em>www.worldradioday.it</em></a></p>						
                    
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Image src="/img/worldradioday.jpg" width="100%" />
                </Col>
            </Row>
        </Container>
    )
}

export default ChiSiamoScreen