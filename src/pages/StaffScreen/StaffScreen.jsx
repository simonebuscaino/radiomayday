import React, { useEffect, useState } from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import "./StaffScreen.css";
import {staff, voci} from "./staff";
import {db} from "../../firebase";
import {onSnapshot, collection, getDocs, query, orderBy} from "firebase/firestore";
import * as Icon from 'react-bootstrap-icons';

function StaffScreen () {

    const [dataStaff, setDataStaff] = useState(staff);
    // const staffCollectionRef = collection(db, "staff");
    // const q = query(staffCollectionRef, orderBy("name", "asc"))
    // useEffect(()=>{
    //     onSnapshot(q, (snapshot)=> {
    //         let crew = [];
    //         snapshot.docs.forEach((doc)=>{
    //             crew.push({...doc.data(), id: doc.id})
    //         })
    //         setStaff(crew);
    //     })
    // }, []);
    

    return (
        <Container fluid className="containerBody">
            <Row>
                <Col>
                    <h1 className="p-2 bg-gradient text-white">Staff</h1>
                </Col>
            </Row>
            <Row className="mt-4 mb-3">
                {
                    dataStaff.map(el => (
                        <Col md="3" key={el.id}>
                            <Row className="containerBoxStaff m-2">
                                <Image className="imgNotPadding mb-2" src={el.img} width="100%" rounded />
                                <h4><strong>{el.name}</strong></h4>
                                <h5>{el.roles}</h5>
                                <span>
                                    <Icon.Facebook size="24px" />
                                    &nbsp;&nbsp;
                                    <Icon.Instagram size="24px" />
                                </span>
                            </Row>
                        </Col>
                    ))
                }
            </Row>
            <Row className="mt-4 mb-3">
                <Col md="12">
                    <h2 className="p-2 bg-gradient text-white">Le nostre voci</h2>
                </Col>
                {
                    voci.map(el => (
                        <Col md="6" key={el.id}>
                            <Row className="containerBoxStaff m-2 text-start">
                                <Col md="4">
                                    <Image className="imgNotPadding mb-2" src={el.img} width="100%" rounded />
                                </Col>
                                <Col md="8">
                                    <h4><strong>{el.name}</strong></h4>
                                    <h5>{el.roles}</h5>
                                    <em>La vostra sveglia del mattino qui per voi!</em>
                                    <br /><br /> 
                                    <span>
                                        <Icon.Facebook size="24px" />
                                        {" "}
                                        <Icon.Instagram size="24px" />
                                    </span>
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