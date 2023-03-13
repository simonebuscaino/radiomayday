import React, { useEffect, useState } from "react";
import { Row, Col, Image} from "react-bootstrap";
import { Clock, ClockFill } from 'react-bootstrap-icons';
import { lun, mar, mer, gio, ven, sab, dom } from "../PalinsestoScreen/palinsesto";
import "./PalinsestoToday.css";

function PalinsestoToday () {
    let dateToday = new Date();
    let dayToday = dateToday.getDay();

    const [daySelected] = useState(dayToday);
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
        getDayData();
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
                                {/* <p style={{marginBottom: "0px"}}>Start from</p> */}
                                <h5><Clock size="16px" className="mb-1"/> {el.start}</h5>
                                {/* <p style={{marginBottom: "0px"}}>End to</p> */}
                                <h5><ClockFill size="16px" className="mb-1" /> {el.end}</h5>
                            </Row>
                        </Col>
                        <Col md="6">
                            <Row>
                                <h5><span className="bg-gradient text-white px-2">{el.program}</span></h5>
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