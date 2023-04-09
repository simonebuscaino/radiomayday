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
        
            <Row>
                <Col sm="12" style={{padding: "0px"}}>
                    <div className="m-1">
                        <h2 className="p-2 bg-gradient text-white">INIZIO DEL NUOVO PALINSESTO</h2>
                        <Alert variant="primary" className="m-0">
                        Si avvisa che nella giornata di PASQUETTA non ci saranno dirette, per ripartire con il nuovo palinsesto a partire da Martedì 11/04/2023.<br/>
                        Con l'inizio del nuovo palinsesto avremo il debutto in diretta dei ragazzi del nostro primo corso ed il grande progetto serale/notturno dei DJ la TeeJay Zone!
                        </Alert>
                    </div>
                </Col>
            </Row>
            <br/>
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