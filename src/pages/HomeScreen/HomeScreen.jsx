import React, {useRef} from "react";
import {Container, Row, Col, Button, Image, Card} from "react-bootstrap";
import Crew from "./Crew";
import "./HomeScreen.css";
import PalinsestoToday from "./PalinsestoToday";
import {LinkContainer} from "react-router-bootstrap";

// import { TwitchEmbed } from 'react-twitch-embed';

function HomeScreen () {

    // const embed = useRef(); // We use a ref instead of state to avoid rerenders.
  
    // const handleReady = (e) => {
    //   embed.current = e;
    // };

    // const ready = () => {
    //     console.log("ready");
    // }

    return (
        <>
        {/* <SliderGallery/> */}
        <Container fluid className="containerBody">
            {/* <TwitchEmbed onVideoReady={ready} channel="troppfunradiotv" width="100%" autoplay={false} muted withChat={false} darkMode={false} hideControls={false} onVideoReady={handleReady} /> */}
            <Row>
                <h2 className="p-2 bg-gradient text-white">Eventi in programma</h2>
                <Col sm="6" style={{padding: "0px"}}>
                    <Card style={{ width: '100%' }}>
                        <a href="https://www.worldradioday.it/" target="_blank">
                            <Card.Img variant="top" src="/img/worldradioday2.jpg" />
                        </a>
                        <Card.Body>
                            <Card.Title>World Radio Day</Card.Title>
                            <Card.Text>
                                Scopri di più sulla partecipazione di Tropp Fun Radio al World Radio Day 2024!
                            </Card.Text>
                            <LinkContainer to="/eventi/worldradioday" exact="/eventi/worldradioday">
                                <Button className="bg-gradient text-white">Scopri di più</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <Col sm="6" style={{padding: "0px"}}>
                    <div className="m-1">
                        <Image src="/img/worldradioday2.jpg" width="100%"/>
                    </div>
                </Col> */}
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