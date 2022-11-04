// import CountdownTimer from "components/CountdownTimer/CountdownTimer";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import React, { useState } from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import "./ManutenzioneScreen.scss";

function ManutenzioneScreen () {
    const [dateCountdown, setDateCountdown] = useState(new Date('2022-11-12'));

    return (
        <Container className="text-center p-5">
            <Row>
                <Col lg="6">
                    <Image src="logo_original.png" width="100%" />
                </Col>
                <Col lg="6" className="bg-gradient rounded-3 text-white p-3">
                    <h2 className="bg-white rounded-3 text-gradient mb-3 p-1"><strong>Stiamo arrivando con il nuovo sito...</strong></h2>
                    <p>
                        Il lancio della prima Radio Interscolastica d'Italia è molto vicina.<br/><br/>
                        Ti aspettiamo il 12 Novembre 2022 al Teatro De Lise di Sarno (SA) in Piazza 5 Maggio alle ore 9.30 per la presentazione ufficiale del progetto.<br/>
                        Un OPEN DAY di presentazione con tanti ospiti speciali e molto altro ancora.
                    </p>
                    <CountdownTimer targetDate={dateCountdown} />
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Teatro%20De%20lise,%20Sarno&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            <a href="https://123movies-to.org"></a><br/>
                            <a href="https://www.embedgooglemap.net" className="text-white text-decoration-none"><small>Show Google Maps on website</small></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ManutenzioneScreen