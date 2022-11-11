import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image, ButtonGroup, Button, ToggleButton, Nav} from "react-bootstrap";
import "./PalinsestoScreen.css";
import { ArrowRight, Clock, ClockFill, HourglassBottom, HourglassTop } from 'react-bootstrap-icons';
import { lun, mar, mer, gio, ven, sab, dom } from "./palinsesto";
import Loading from "../../components/Loading/Loading";
import { useGlobalContext } from "../../context";

function PalinsestoScreen () {
    let dateToday = new Date;
    let dayToday = dateToday.getDay();

    const {loading, setLoading, isMobileDisplay} = useGlobalContext();

    const [allDays, setAllDays] = useState(['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']);
    const [daySelected, setDaySelected] = useState(dayToday);
    const [dayData, setDayData] = useState();

    function getDayData () {
        switch (daySelected) {
            case 1:
                setDayData(lun);
                break;
            case 2:
                setDayData(mar);
                break;
            case 3:
                setDayData(mer);
                break;
            case 4:
                setDayData(gio);
                break;
            case 5:
                setDayData(ven);
                break;
            case 6:
                setDayData(sab);
                break;
            case 7:
                setDayData(dom);
                break;
            case 0:
                setDayData(dom);
                break;
            default:
                break;
        }
    }
    
    useEffect(()=>{
        // setLoading({
        //     is: true,
        //     text: "Sto caricando il Palinsesto..."
        // });
        // setDayData();
        // setTimeout(() => {
            getDayData();
        // }, 2000);
        // setLoading({
        //     is: false,
        //     text: ""
        // });
    }, [daySelected])


    // if (loading.is) {
    //     return (
    //         <Loading text={loading.text}/>
    //     )
    // }
    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1 class="p-2 bg-gradient text-white">Palinsesto</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                <ButtonGroup className="text-white" vertical={isMobileDisplay ? true : false}>
                    {
                        allDays.map((el, index)=> (
                            <ToggleButton
                                key={index + 1}
                                type="radio"
                                variant="outline-primary"
                                checked={index + 1 === daySelected}
                                onClick={() => setDaySelected(index + 1)}
                                value={el}
                            >
                                { el }
                            </ToggleButton>
                        ))
                    }
                </ButtonGroup>
            </Row>
            {
                dayData === undefined || dayData.length === 0 ?
                    <h6>Nessun appuntamento per questo giorno</h6>
                :
                dayData.map((el, index) => (
                    <Row className="contentDayPalinsesto mb-3" key={index}>
                        <Col md="2">
                            <Image src={el.img} width="120px" rounded />
                        </Col>
                        <Col md="2">
                            <Row>
                                {/* <p style={{marginBottom: "0px"}}>Start from</p> */}
                                <h5><Clock size="16px" className="mb-1"/> {el.start}</h5>
                                {/* <p style={{marginBottom: "0px"}}>End to</p> */}
                                <h5><ClockFill size="16px" className="mb-1" /> {el.end}</h5>
                            </Row>
                        </Col>
                        <Col md="8">
                            <Row>
                                <h4>{el.program}</h4>
                                <p style={{marginBottom: "0px"}}>Condotto da {el.speakers}</p>
                            </Row>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    )
}

export default PalinsestoScreen