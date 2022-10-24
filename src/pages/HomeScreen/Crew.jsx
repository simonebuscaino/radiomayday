import React from "react";
import { useEffect, useState } from "react";
import {Container, Row, Col, Carousel} from "react-bootstrap";
// import {staff} from "../StaffScreen/staff";
import {db} from "../../firebase";
import {onSnapshot, collection, getDocs} from "firebase/firestore";

function Crew () {
    const [staff, setStaff] = useState();
    const staffCollectionRef = collection(db, "staff");

    useEffect(()=>{
        const getStaff = async () => {
            const data = await getDocs(staffCollectionRef);
            setStaff(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        getStaff();
    }, []);

    return (
        <Carousel>
            {
                staff === undefined || staff.length === 0 ?
                    <h6>Non risultano presenti membri dello Staff</h6>
                :
                staff.map((el) => (
                    <Carousel.Item interval={3000} key={el.id}>
                        <img
                        className="d-block w-100"
                        src={el.img}
                        alt={el.name}
                        />
                        <Carousel.Caption>
                        <h3>{el.name}</h3>
                        <p>{el.roles}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Crew