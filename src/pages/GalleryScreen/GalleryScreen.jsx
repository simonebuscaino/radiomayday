import React, {useEffect, useState} from 'react'
import {db, storage} from "../../firebase";
import {onSnapshot, collection, getDocs, query, orderBy} from "firebase/firestore";
import {Container, Row, Col, Image} from "react-bootstrap";
import "./GalleryScreen.scss";

function GalleryScreen({history}) {
    const [gallery, setGallery] = useState([]);
    // const [images, setImages] = useState([]);
    const galleryCollectionRef = collection(db, "gallery");
    const qGallery = query(galleryCollectionRef);

    useEffect(() => {
        onSnapshot(qGallery, (snapshot)=> {
            setGallery([]);
            snapshot.docs.forEach((doc)=>{
                setGallery(prev => [...prev, {...doc.data(), id: doc.id}])
            })
        })
    }, [])
    
  return (
    
    <Container fluid className="containerBody">
        <Row>
            <Col>
                <h1 className="p-2 bg-gradient text-white">Gallery</h1>
                <p className="text-start fs-5">
                    Ci teniamo molto a lasciare il segno, per questo facciamo foto reportage ad ogni evento, ognuno di essa ci ha aiutato a crescere sempre di più!
                    Scopri tutto su di noi e rivivi tutti i momenti più belli con noi.
                </p>
            </Col>
        </Row>
        <Row className="mt-4 mb-3">
            <Col md="12">
                <h2 className="p-2 text-center">Seleziona un Album</h2>
            </Col>
            {
                gallery.map((el, index) => (
                    <Col md="6" key={index}>
                        <Row className="m-2 boxAlbum rounded border-gradient text-center text-gradient p-3 cursor-pointer" onClick={() => history.push('gallery/' + el.id)}>
                            <h4 className="m-0"><strong className="px-2">{el.title}</strong></h4>
                        </Row>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default GalleryScreen