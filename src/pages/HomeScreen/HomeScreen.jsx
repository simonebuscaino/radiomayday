import React from "react";
import {Container, Row, Col, Carousel, Image} from "react-bootstrap";
import Crew from "./Crew";
import "./HomeScreen.css";
import PalinsestoToday from "./PalinsestoToday";
import SliderGallery from "./SliderGallery";
import WidgetBot from "@widgetbot/react-embed";

function HomeScreen () {

    return (
        <>
        {/* <SliderGallery/> */}
        <Container fluid className="containerBody">
            <Row>
                <Col sm="12" style={{padding: "0px"}}>
                    <div className="m-1">
                        <h2 className="p-2 bg-gradient text-white">Chat Room</h2>
                        {/* <WidgetBot
                            server="1044731226755432539"
                            channel="1044731227426529302"
                            width="100%"
                            height="500px"
                        /> */}
                        <iframe src="https://organizations.minnit.chat/681623609558937/Main?embed&nickname=Guest" width="100%" height="500px" styles={{border: "none"}} allowtransparency="true"></iframe>
                        {/* <iframe src='https://deadsimplechat.com/PPR6I-Wzi' width='100%' height='500px'></iframe> */}
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md="4">
                    <div className="m-1">
                        <h2 className="p-2 bg-gradient text-white">I nostri studenti</h2>
                        {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWeb-Radio-Regione-Campania-103449527993974%2F%3Fepa%3DSEARCH_BOX&amp;tabs=timeline&amp;width=450&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=194721887735996" width="100%" height="500px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                        {/* <div className="elfsight-app-844ada09-5210-45aa-9e40-2fce89c7ff33"></div> */}
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