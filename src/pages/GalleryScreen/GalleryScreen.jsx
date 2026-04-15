import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { onSnapshot, collection, query } from "firebase/firestore";
import { Container, Image } from "../../components/BootstrapCompat";
import { Card } from "../../components/UI";
import { HiPhoto } from 'react-icons/hi2';

function GalleryScreen({ history }) {
  const [gallery, setGallery] = useState([]);
  const galleryCollectionRef = collection(db, "gallery");
  const qGallery = query(galleryCollectionRef);

  useEffect(() => {
    onSnapshot(qGallery, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setGallery(docs);
    });
  }, []);

  return (
    <div className="bg-neutral-50/50 min-h-screen py-16 text-center">
      <Container>
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-2">
            <HiPhoto className="text-primary-500" size={24} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 block">Moments</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
            La Nostra <span className="gradient-text">Gallery</span>
          </h1>
          <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed mb-10 mx-auto">
            Ci teniamo molto a lasciare il segno: facciamo reportage ad ogni evento per rivivere insieme i momenti più belli della nostra storia.
          </p>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto"></div>
        </div>

        <div className="mb-10 animate-slide-up">
           <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Seleziona un Album</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((el, index) => (
            <div key={index} className="animate-slide-up [animation-delay:100ms]">
              <Card 
                hover 
                variant="glass" 
                className="group p-8 flex items-center justify-between border-neutral-100 hover:border-primary-200 transition-all duration-500 cursor-pointer overflow-hidden relative h-full"
                onClick={() => history.push('gallery/' + el.id)}
              >
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                    <HiPhoto size={24} />
                  </div>
                  <h4 className="text-xl font-extrabold text-neutral-900 group-hover:text-primary-500 transition-colors">
                    {el.title}
                  </h4>
                </div>
                <div className="relative z-10 text-neutral-300 group-hover:text-primary-400 group-hover:translate-x-2 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default GalleryScreen;