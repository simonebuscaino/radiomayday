import React, { useEffect, useState } from 'react';
import { db, storage } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Container, Image } from "../../../components/BootstrapCompat";
import { useParams } from "react-router-dom";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import ResponsiveGallery from 'react-responsive-gallery';
import Loading from '../../../components/Loading/Loading';
import { HiArrowLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function GalleryDetail() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const galleryCollectionRef = doc(db, "gallery", id);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const docSnap = await getDoc(galleryCollectionRef);
        if (docSnap.exists()) {
          const albumData = docSnap.data();
          setAlbum(albumData);
          const storageRef = ref(storage, "gallery/" + albumData.folder);
          
          const res = await listAll(storageRef);
          const urls = await Promise.all(
            res.items.map(async (itemRef) => {
              const url = await getDownloadURL(itemRef);
              return {
                alt: itemRef.name,
                src: url,
                imgClassName: 'rounded-xl shadow-soft-md hover:scale-[1.02] transition-transform duration-500'
              };
            })
          );
          setImages(urls);
        }
      } catch (error) {
        console.error("Error fetching album details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="bg-neutral-50/50 min-h-screen py-16">
      <Container>
        {/* Back Link */}
        <div className="px-4">
          <Link 
            to="/gallery" 
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary-500 font-bold mb-10 transition-colors group"
          >
            <HiArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Torna alla Gallery
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-16 animate-fade-in px-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 mb-2 block">Album</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 break-words leading-tight">
            {album.title}
          </h1>
          {album.description && (
            <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed mb-10">
              {album.description}
            </p>
          )}
          <div className="h-1.5 w-24 bg-primary-500 rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="animate-slide-up [animation-delay:200ms] px-2">
          <ResponsiveGallery 
            useLightBox 
            images={images} 
            cols={{ xs: 1, s: 2, m: 3, l: 4, xl: 4 }}
          />
        </div>
      </Container>
    </div>
  );
}

export default GalleryDetail;