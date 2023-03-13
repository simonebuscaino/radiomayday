import React, {useRef, useState, useEffect} from 'react'
import {Button, Row, Col, Container} from 'react-bootstrap';
import { Play, Stop, Pause, VolumeUp } from 'react-bootstrap-icons';
import {lun, mar, mer, gio, ven, sab, dom} from "../../pages/PalinsestoScreen/palinsesto";
import { ChevronCompactDown, ChevronCompactUp } from 'react-bootstrap-icons';
import "./PlayerRadio.scss";

function PlayerRadio () {
    let dateToday = new Date();
    let dayToday = dateToday.getDay();
    let hourNow = dateToday.getHours();
    let minuteNow = dateToday.getMinutes();

    const [togglePlayer, setTogglePlayer] = useState(true);
    const [daySelected, setDaySelected] = useState(dayToday);
    const [dayData, setDayData] = useState();
    const [onAir, setOnAir] = useState({
        img: "logo_original.png",
        program: "Tropp Fun Radio",
    });

    let dataDay;

    function getDayData () {
        switch (daySelected) {
            case 1:
                setDayData(lun);
                dataDay = lun;
                break;
            case 2:
                setDayData(mar);
                dataDay = mar;
                break;
            case 3:
                setDayData(mer);
                dataDay = mer;
                break;
            case 4:
                setDayData(gio);
                dataDay = gio;
                break;
            case 5:
                setDayData(ven);
                dataDay = ven;
                break;
            case 6:
                setDayData(sab);
                dataDay = sab;
                break;
            case 0:
                setDayData(dom);
                dataDay = dom;
                break;
            default:
                break;
        }

        if (hourNow < 10) {
            hourNow = "0" + hourNow;
        }
        let hourMinutes = hourNow + ":" + minuteNow;
        dataDay.forEach((element) => {
            if (hourMinutes >= element.start && hourMinutes <= element.end) {
                setOnAir(element);
            }
        });
    }

    useEffect(()=> {
        getDayData();
    },[dayData])

     // Mostrare o no il pulsante di Scroll
  const [isShrunk, setIsShrunk] = useState(false);

  // Mostra il pulsante quando la pagina viene scorri fino a una data distanza
  const toggleShrunk = () => {
    if (window.pageYOffset > 10) {
        setIsShrunk(true);
    } else {
        setIsShrunk(false);
    }
  };

    const refPlayer = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    
    function playPlayer () {
        refPlayer.current.load();
        refPlayer.current.play();
        setIsPlaying(true);
    }

    function stopPlayer () {
        refPlayer.current.pause();
        setIsPlaying(false);
    }

    function pausePlayer () {
        // refPlayer.current.src('');
        refPlayer.current.pause();
        setIsPlaying(false);
    }

    return (
        <Container fluid className="containerPlayer">            
            <Row className="text-white" style={{cursor:"pointer"}} onClick={()=>setTogglePlayer(!togglePlayer)}>
                    {togglePlayer ?
                        <ChevronCompactDown/> 
                        : 
                        <span className='text-uppercase'>
                            <small>
                                {isPlaying ? <><VolumeUp size="24" /> Stai ascoltando Tropp Fun Radio</> : "Ascolta ora"}
                            </small>
                            &nbsp;&nbsp;
                            <ChevronCompactUp/>
                        </span>
                    }
            </Row>
            {
                togglePlayer ?
                <Row className="containerPlayer text-white p-1" style={{alignItems: "center"}}>
                    <Col lg="2" xs="auto" className="p-2">
                        <img src={onAir.img} className="bg-white" style={{borderRadius: "10px"}} width="80px" />
                    </Col>
                    <Col style={{textAlign: "left"}}>
                        Stai ascoltando: 
                    </Col>
                    <Col lg="4" xs="10" style={{textAlign: "left"}}>
                        <span style={{marginBottom: "5px", fontSize: "14px"}}>
                            <h5 style={{margin:"0px"}}>{onAir.program}</h5>
                        </span>
                        {onAir.speakers && <span>Condotto da <b>{onAir.speakers}</b></span>}
                        {!onAir.speakers && <span style={{fontSize: "14px"}} className="cc_streaminfo" data-type="song" data-username="eduardo">Loading ...</span>}
                    </Col>
                    {
                        onAir.speakers ?
                        <Col>
                            <Button variant="secondary">
                                <a
                                    className="text-decoration-none text-black"
                                    href="javascript:void(
                                    window.open(
                                        'https://form.jotform.com/230557309090050',
                                        'blank',
                                        'scrollbars=yes,
                                        toolbar=no,
                                        width=700,
                                        height=500'
                                    )
                                    )
                                ">
                                    Invia una richiesta
                                </a>
                            </Button>
                        </Col>
                        : ""
                    }
                    {/* <Col>
                        <marquee><span style={{fontSize: "14px"}} className="cc_streaminfo" data-type="song" data-username="eduardo">Loading ...</span></marquee>
                    </Col> */}
                    <Col lg="2" xs="2" style={{marginTop: "auto", marginBottom: "auto"}}>
                    {
                    isPlaying ?
                        // <Button variant="secondary" className="p-0 text-white" onClick={pausePlayer}><Pause size="48"/></Button>
                        <Pause className="iconPlayPause" size="48" onClick={pausePlayer} />
                    :
                        // <Button variant="secondary" className="p-0 text-white" onClick={playPlayer}><Play size="48"/></Button>
                        <Play className="iconPlayPause" size="48" onClick={playPlayer} />
                    }
                    </Col>
                </Row>
                : ""  
            }
               
            <audio src="https://sr11.inmystream.it/proxy/eduardo?mp=/stream" ref={refPlayer}></audio>
        </Container>
    );
}

export default PlayerRadio 