import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import "./StaffScreen.css";
import {dj, staff, tecnici, voci} from "./staff";
import {db, storage} from "../../firebase";
import {onSnapshot, collection, getDocs, query, orderBy} from "firebase/firestore";
import * as Icon from 'react-bootstrap-icons';
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import ResponsiveGallery from 'react-responsive-gallery';

function StaffScreen () {

    const [dataStaff, setDataStaff] = useState(staff);
    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1 className="p-2 bg-gradient text-white">Staff</h1>
                    <p className="text-start fs-5">
                    La nostra più grande soddisfazione è quella di avere nello Staff Ufficiale gran parte dei ragazzi che hanno frequentato i nostri Corsi e che dopo i nostri insegnamenti sono diventati Speaker, Tecnici, DJ, etc...
                    </p>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                <Col md="12">
                    <h2 className="p-2 bg-gradient text-white">Speaker</h2>
                </Col>
                {
                    voci.map((el, index) => (
                        <Col md="6" key={index}>
                            <Row className="containerBoxStaff m-2 text-start">
                                <Col md="4">
                                    <Image className="imgNotPadding mb-2" src={el.img} width="100%" rounded />
                                </Col>
                                <Col md="8">
                                    <h4><strong className="bg-gradient text-white px-2">{el.name}</strong></h4>
                                    <h5>{el.roles}</h5>
                                    {/* <em>La vostra sveglia del mattino qui per voi!</em> */}
                                    {/* <br /><br /> 
                                    <span>
                                        <Icon.Facebook size="24px" />
                                        {" "}
                                        <Icon.Instagram size="24px" />
                                    </span> */}
                                </Col>

                            </Row>
                        </Col>
                    ))
                }
            </Row>

            <Row className="mt-4 mb-3">
                <Col md="12">
                    <h2 className="p-2 bg-gradient text-white">Tecnici</h2>
                </Col>
                {
                    tecnici.map((el, index) => (
                        <Col md="6" key={index}>
                            <Row className="containerBoxStaff m-2 text-start">
                                <Col md="4">
                                    <Image className="imgNotPadding mb-2" src={el.img} width="100%" rounded />
                                </Col>
                                <Col md="8">
                                    <h4><strong className="bg-gradient text-white px-2">{el.name}</strong></h4>
                                    <h5>{el.roles}</h5>
                                    {/* <em>La vostra sveglia del mattino qui per voi!</em> */}
                                    {/* <br /><br /> 
                                    <span>
                                        <Icon.Facebook size="24px" />
                                        {" "}
                                        <Icon.Instagram size="24px" />
                                    </span> */}
                                </Col>

                            </Row>
                        </Col>
                    ))
                }
            </Row>

            <Row className="mt-4 mb-3">
                <Col md="12">
                    <h2 className="p-2 bg-gradient text-white">DJ</h2>
                </Col>
                {
                    dj.map((el, index) => (
                        <Col md="6" key={index}>
                            <Row className="containerBoxStaff m-2 text-start">
                                <Col md="4">
                                    <Image className="imgNotPadding mb-2" src={el.img} width="100%" rounded />
                                </Col>
                                <Col md="8">
                                    <h4><strong className="bg-gradient text-white px-2">{el.name}</strong></h4>
                                    <h5>{el.roles}</h5>
                                    {/* <em>La vostra sveglia del mattino qui per voi!</em> */}
                                    {/* <br /><br /> 
                                    <span>
                                        <Icon.Facebook size="24px" />
                                        {" "}
                                        <Icon.Instagram size="24px" />
                                    </span> */}
                                </Col>

                            </Row>
                        </Col>
                    ))
                }
            </Row>
            
            {/* <Row className="mt-4 mb-3">
                {
                    staff === undefined || staff.length === 0 ?
                        <h6>Non risultano presenti membri dello Staff</h6>
                    :
                    staff.map((el) => (
                        <Col md="3" key={el.id}>
                            <Row className="containerBoxStaff m-2">
                                <Image className="imgNotPadding mb-2" src={el.img} width="100%" rounded />
                                <h5>{el.name}</h5>
                                <h6>{el.roles}</h6>
                                <span>
                                    <Icon.Facebook />
                                    {" "}
                                    <Icon.Instagram />
                                </span>

                            </Row>
                        </Col>
                    ))
                }
            </Row> */}
        </Container>
    )
}

export default StaffScreen