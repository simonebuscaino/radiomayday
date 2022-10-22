import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import { lun, mar, mer, gio, ven, sab, dom } from "../PalinsestoScreen/palinsesto";
import "./PalinsestoToday.css";

function PalinsestoToday () {
    let dateToday = new Date;
    let dayToday = dateToday.getDay();

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
        getDayData()
    }, [daySelected])

    return (
        <>
            {
                dayData === undefined || dayData.length === 0 ?
                    <h6>Nessun appuntamento per oggi</h6>
                :
                dayData.map((el, index) => (
                    <Row className="contentDayPalinsesto" key={index}>
                        <Col md="3">
                            <Image src={el.img} width="80px" rounded />
                        </Col>
                        <Col md="3">
                            <Row>
                                <p style={{marginBottom: "0px", fontSize: "12px"}}>Start from</p>
                                <h6>{el.start}</h6>
                                <p style={{marginBottom: "0px", fontSize: "12px"}}>End to</p>
                                <h6>{el.end}</h6>
                            </Row>
                        </Col>
                        <Col md="6">
                            <Row>
                                <h5>{el.program}</h5>
                                <p style={{marginBottom: "0px", fontSize: "14px"}}>Condotto da {el.speakers}</p>
                            </Row>
                        </Col>
                    </Row>
                ))
            }
        </>
    )
}

export default PalinsestoToday