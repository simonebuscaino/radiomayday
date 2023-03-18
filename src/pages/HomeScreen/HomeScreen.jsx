import React from "react";
import {Container, Row, Col, Alert} from "react-bootstrap";
import Crew from "./Crew";
import "./HomeScreen.css";
import PalinsestoToday from "./PalinsestoToday";

function HomeScreen () {

    return (
        <>
        {/* <SliderGallery/> */}
        <Container fluid className="containerBody">
        
            {/* <Row>
                <Col sm="12" style={{padding: "0px"}}>
                    <div className="m-1">
                        <h2 className="p-2 bg-gradient text-white">INAUGURAZIONE NUOVA SEDE</h2>
                        <b>Oggi 18/03/2023</b> in occasione dell'<b>Inaugurazione Ufficiale</b> della nuova <b>Sede Radio</b> a Sarno in Via Silvio Ruocco 8 saranno <b>in diretta</b> per tutto il giorno per la prima volta <b>i ragazzi del nostro primo corso</b>.<br/>
                        <Alert variant="primary" className="m-0">
                            Il palinsesto non seguirà la normale programmazione, ma ci saranno dirette NON STOP <b>dalle 9 alle 13</b> e <b>dalle 15 alle 22</b>.
                        </Alert>
                        Seguiteci, per la prima volta, anche in <b>diretta video</b> cliccando qui: <a href="https://www.twitch.tv/troppfunradiotv" target="_new">Diretta Video</a>.
                    </div>
                </Col>
            </Row>
            <br/>
         */}
            <Row>
                <Col sm="12" style={{padding: "0px"}}>
                    <div className="m-1">
                        <h2 className="p-2 bg-gradient text-white">Chat Room</h2>
                        <iframe src="https://organizations.minnit.chat/681623609558937/Main?embed&nickname=Guest" title="chatRoom" width="100%" height="500px" styles={{border: "none"}} allowtransparency="true"></iframe>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md="4">
                    <div className="m-1">
                        <h2 className="p-2 bg-gradient text-white">I nostri studenti</h2>
                        <Crew/>
                    </div>
                </Col>
                <Col md="8">
                    <div className="m-1">
                        <h2 className="p-2 bg-gradient text-white">Oggi in onda</h2>
                        <PalinsestoToday/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HomeScreen