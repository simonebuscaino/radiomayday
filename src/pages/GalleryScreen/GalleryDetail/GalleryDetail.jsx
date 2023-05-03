import React, {useEffect, useState, useRef} from 'react'
import {db, storage} from "../../../firebase";
import {onSnapshot, collection, getDocs, query, orderBy, doc, getDoc} from "firebase/firestore";
import {Container, Row, Col, Image} from "react-bootstrap";
import { useHistory,useParams } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import ResponsiveGallery from 'react-responsive-gallery';
import Loading from '../../../components/Loading/Loading';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';      

        
function GalleryDetail({history}) {
    const {id} = useParams();
    const [album, setAlbum] = useState({});
    // const [images, setImages] = useState([]);
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);    
    const galleria = useRef(null);
    const [loading, setLoading] = useState(true);

    const [gallery, setGallery] = useState([]);
    const galleryCollectionRef = doc(db, "gallery", id);
    // const qGallery = query(galleryCollectionRef);

    useEffect(async () => {
        // onSnapshot(qGallery, (snapshot)=> {
        //     setGallery([]);
        //     snapshot.docs.forEach((doc)=>{
        //         setGallery(prev => [...prev, {...doc.data(), id: doc.id}])
        //     })
        // })
        

        try {
            const docSnap = await getDoc(galleryCollectionRef);
            if(docSnap.exists()) {
                setAlbum(docSnap.data());
                const storageRef = ref(storage, "gallery/" + docSnap.data().folder);
                // console.log(docSnap.data());
                // await docSnap.data().images.forEach((el) => {
                //     const itemData = {
                //         alt: "test",
                //         src: el,
                //         imgClassName: 'rounded'
                //     }
                //     setImages(prev => [...prev, itemData]);
                // });
                await listAll(storageRef).then((res) => {
                    setImages([]);
                    res.items.forEach(async (itemRef) => {
                        const url = await getDownloadURL(itemRef);
                        const itemData = {
                            alt: itemRef.name,
                            src: url,
                            imgClassName: 'rounded'
                        }
                        setImages(prev => [...prev, itemData]);
                    });
                });
                setLoading(false);
                // console.log("ok", images);
            } else {
                console.log("Document does not exist")
            }
        
        } catch(error) {
            console.log(error)
        }

    }, [])

    // const responsiveOptions = [
    //     {
    //         breakpoint: '1024px',
    //         numVisible: 5
    //     },
    //     {
    //         breakpoint: '960px',
    //         numVisible: 4
    //     },
    //     {
    //         breakpoint: '768px',
    //         numVisible: 3
    //     },
    //     {
    //         breakpoint: '560px',
    //         numVisible: 1
    //     }
    // ];

    // const itemTemplate = (item) => {
    //     console.log(item);
    //     return <img src={item.src} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    // }

    // const thumbnailTemplate = (item) => {
    //     return <img src={item.src} alt={item.alt} style={{ width: '40%', display: 'block' }} />;
    // }

    if (loading) {
        return (
            <Loading />
        )
    }
  return (
    <Container fluid className="containerBody">
    <Row>
        <Col>
            <h1 className="p-2 bg-gradient text-white">{album.title}</h1>
            <p className="text-start fs-5">
                {album.description}
            </p>
        </Col>
    </Row>
    <Row className="mt-4 mb-3">
        <ResponsiveGallery useLightBox images={images}/>
        {/* <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={7} circular showItemNavigators 
    item={itemTemplate} thumbnail={thumbnailTemplate} /> */}
        {/* <Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

        <div className="grid" style={{ maxWidth: '400px' }}>
            {
                images && images.map((image, index) => {
                    let imgEl = <img src={image.src} onClick={
                        () => {setActiveIndex(index); galleria.current.show()}
                    } />
                    return (
                        <div className="col-3" key={index}>
                            {imgEl}
                        </div>
                    )
                })
            }
        </div> */}
    </Row>
</Container>
  )
}

export default GalleryDetail