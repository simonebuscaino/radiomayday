import React from 'react';
import { Container } from '../../components/BootstrapCompat';
import { Card } from '../../components/UI';
import { HiMicrophone } from 'react-icons/hi2';

function ProgrammiScreen() {
    return (
        <div className="bg-neutral-50/50 min-h-screen py-16">
            <Container>
                {/* Header */}
                <div className="mb-16 animate-fade-in text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <HiMicrophone className="text-primary-500" size={24} />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 block">Podcast</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-neutral-900">
                        I Nostri <span className="gradient-text">Programmi</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed mb-10 mx-auto">
                        Riascolta i nostri migliori contenuti in streaming. La voce dei nostri studenti e i programmi esclusivi di Tropp Fun Radio, sempre disponibili per te.
                    </p>
                    <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto"></div>
                </div>

                {/* Content Section */}
                <div className="animate-slide-up [animation-delay:200ms]">
                    <Card variant="glass" className="p-0 overflow-hidden border-none shadow-premium">
                        <div className="p-8 border-b border-neutral-100 bg-white/50">
                            <h3 className="text-2xl font-black text-neutral-900 mb-2">Mixcloud Official</h3>
                            <p className="text-neutral-500">Segui il nostro profilo ufficiale per non perdere nessun aggiornamento.</p>
                        </div>
                        <div className="p-4 bg-neutral-900">
                            <iframe 
                                title="Mixcloud Player"
                                width="100%" 
                                height="400px" 
                                src="https://www.mixcloud.com/widget/follow/?u=%2FRRCampania%2F&hide_followers=1&hide_info=1" 
                                frameBorder="0"
                                className="rounded-xl overflow-hidden"
                            ></iframe>
                        </div>
                    </Card>
                </div>

                {/* Additional Info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up [animation-delay:400ms]">
                    <Card variant="default" className="p-8 border-neutral-100">
                         <h4 className="text-xl font-bold mb-4 text-primary-500 uppercase tracking-wider">Perché Podcast?</h4>
                         <p className="text-neutral-600 leading-relaxed"> Sappiamo che la vita degli studenti è frenetica. Per questo rendiamo disponibili i nostri programmi migliori on-demand, così puoi ascoltarci quando e dove vuoi.</p>
                    </Card>
                    <Card variant="default" className="p-8 border-neutral-100">
                         <h4 className="text-xl font-bold mb-4 text-secondary-500 uppercase tracking-wider">Prossimamente</h4>
                         <p className="text-neutral-600 leading-relaxed"> Stiamo lavorando per portare le nostre rubriche sulle principali piattaforme di streaming come Spotify e Apple Podcast. Resta sintonizzato!</p>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default ProgrammiScreen;
