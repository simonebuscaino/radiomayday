import React, {useState, useEffect} from "react";
import {Navbar as NavBar, Col, Row, Nav, Image, Container } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import PlayerRadio from "../Body/PlayerRadio/PlayerRadio";
import {lun, mar, mer, gio, ven, sab, dom} from "../Body/PalinsestoScreen/palinsesto";

function Navbar () {
    let dateToday = new Date();
    let dayToday = dateToday.getDay();
    let hourNow = dateToday.getHours();
    let minuteNow = dateToday.getMinutes();

    const [daySelected, setDaySelected] = useState(dayToday);
    const [dayData, setDayData] = useState();
    const [onAir, setOnAir] = useState({
        img: "kosmosradio_yellow_ffe600.png",
        program: "AutoDJ RRC",
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
        console.log(hourNow + ":" + minuteNow);
        dataDay.forEach((element) => {
            if (hourMinutes >= element.start && hourMinutes <= element.end) {
                console.log("Trovato!" , element);
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

//   // Imposta la coordinata superiore a 0 e rendere lo scorrimento fluido
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

  // useEffect per toggleVisibility
  useEffect(() => {
    window.addEventListener("scroll", toggleShrunk);
  }, []);

    return (
        <Container fluid>
        <Row className={isShrunk ? "fixed-top containerNavbar border-bottom border-primary border-2 shrunk" : "pt-2 pb-2 fixed-top border-bottom border-primary border-2 containerNavbar"}>
            {/* <Col style={{textAlign: "left"}} xs="2" className="pt-1 pb-1">
                <Image src="https://i.imgur.com/RWs2szo.png" width="100px"/>
            </Col> */}
            <Col lg="2" xs="4">
                <span>
                    <Image className="logo" src="logo_white.png" width="100px"/>
                </span>
            </Col>
            <Col xs>
                <NavBar collapseOnSelect expand="lg" variant="dark">
                    {/* <NavBar.Brand>
                        <Image src="https://i.imgur.com/RWs2szo.png" width="100px"/>
                    </NavBar.Brand> */}
                    <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavBar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/palinsesto">
                                <Nav.Link>Palinsesto</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/staff">
                                <Nav.Link>Staff</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/programmi">
                                <Nav.Link>Programmi</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </NavBar.Collapse>
                </NavBar>
            </Col>
            {/* <Col style={{textAlign:"right"}}>
                <Row>
                    <Col>
                        <img src={onAir.img} width="80px" />
                    </Col>
                    <Col>
                        <p>Stai ascoltando: </p>
                        <b>{onAir.program}</b>
                    </Col>
                </Row>
            </Col> */}
            {/* <Col style={{textAlign:"right"}}>
                <PlayerRadio onAir={onAir}/>
            </Col> */}
        </Row>
    </Container>
    )
}

export default Navbar