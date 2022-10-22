import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import "./PalinsestoScreen.css";
import { ArrowRight } from 'react-bootstrap-icons';
import { lun, mar, mer, gio, ven, sab, dom } from "./palinsesto";
import Loading from "../../commons/Loading/Loading";
import { useGlobalContext } from "../../../context";

function PalinsestoScreen () {
    let dateToday = new Date;
    let dayToday = dateToday.getDay();

    const {loading, setLoading} = useGlobalContext();

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
        <Container fluid className="mt-5 containerBody">
            <Row>
                <Col>
                    <h1>Palinsesto</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                <Col className={daySelected===1 ? "btn btn-primary active" : "btn btn-secondary"} onClick={() => setDaySelected(1)}>
                    <h4>Lunedì</h4>
                </Col>
                <Col className={daySelected===2 ? "btn btn-primary active" : "btn btn-secondary"} onClick={() => setDaySelected(2)}>
                    <h4>Martedì</h4>
                </Col>
                <Col className={daySelected===3 ? "btn btn-primary active" : "btn btn-secondary"} onClick={() => setDaySelected(3)}>
                    <h4>Mercoledì</h4>
                </Col>
                <Col className={daySelected===4 ? "btn btn-primary active" : "btn btn-secondary"} onClick={() => setDaySelected(4)}>
                    <h4>Giovedì</h4>
                </Col>
                <Col className={daySelected===5 ? "btn btn-primary active" : "btn btn-secondary"} onClick={() => setDaySelected(5)}>
                    <h4>Venerdì</h4>
                </Col>
                <Col className={daySelected===6 ? "btn btn-primary active" : "btn btn-secondary"} onClick={() => setDaySelected(6)}>
                    <h4>Sabato</h4>
                </Col>
                <Col className={daySelected===0 ? "btn btn-primary active" : "btn btn-secondary"} onClick={() => setDaySelected(0)}>
                    <h4>Domenica</h4>
                </Col>
            </Row>
            {
                dayData === undefined || dayData.length === 0 ?
                    <h6>Nessun appuntamento per questo giorno</h6>
                :
                dayData.map((el, index) => (
                    <Row className="contentDayPalinsesto mb-3" key={index}>
                        <Col md="auto">
                            <Image src={el.img} width="120px" rounded />
                        </Col>
                        <Col md="auto">
                            <Row>
                                <p style={{marginBottom: "0px"}}>Start from</p>
                                <h5>{el.start}</h5>
                                <p style={{marginBottom: "0px"}}>End to</p>
                                <h5>{el.end}</h5>
                            </Row>
                        </Col>
                        <Col md="auto">
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