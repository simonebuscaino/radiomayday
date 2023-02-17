import React from "react";
import { useEffect, useState } from "react";
import {Container, Row, Col, Carousel} from "react-bootstrap";
import {staff, voci} from "../StaffScreen/staff";
import {duemilaventidue} from "../CorsiScreen/corsi";
// import {db} from "../../firebase";
// import {onSnapshot, collection, getDocs} from "firebase/firestore";

function Crew () {
    const [allStaff, setAllStaff] = useState([]);
    // const staffCollectionRef = collection(db, "staff");

    // useEffect(()=>{
    //     const getStaff = async () => {
    //         const data = await getDocs(staffCollectionRef);
    //         setStaff(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    //     }
    //     getStaff();
    // }, []);

    useEffect(() => {
        if(staff.length > 0 && voci.length > 0) {
            setAllStaff(...allStaff, voci);
            // allStaff.push(staff);
            // allStaff.push(voci);
        }
        console.log(staff);
    }, [])

    return (
        <Carousel>
            {
                allStaff === undefined || allStaff.length === 0 ?
                    <h6>Non risultano studenti</h6>
                :
                duemilaventidue.map((el, index) => (
                    <Carousel.Item interval={3000} key={index}>
                        <img
                            className="d-block w-100"
                            src={el.img}
                            alt={el.name}
                        />
                        <Carousel.Caption>
                            <h3>{el.name}</h3>
                            {/* <p>{el.roles}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Crew