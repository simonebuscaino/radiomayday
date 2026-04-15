import { useEffect, useState } from 'react';
import { Container } from '../../components/BootstrapCompat';
import { Card } from '../../components/UI';
import { HiMicrophone, HiArrowPath, HiXMark } from 'react-icons/hi2';
import { FaSpotify } from 'react-icons/fa';
import { scheduleService } from '../../services/scheduleService';

function ProgrammiScreen() {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const data = await scheduleService.getAllPrograms();
                
                // Mocking "Poetando" for layout testing if not in DB yet
                const hasPoetando = data.find(p => p.title.toLowerCase().includes('poetando'));
                if (!hasPoetando) {
                    data.push({
                        id: 'mock-poetando',
                        title: 'Poetando',
                        description: `Poetando è una rubrica di Radio Mayday interamente dedicata alla poesia, ideata e condotta da Lia Manzi.\nAl centro c’è la parola poetica, intesa come spazio di ascolto, cura e possibilità.\n\nOgni mese Poetando sceglie una tematica – come la pace, l’amore, la libertà – e la attraversa puntata dopo puntata. Le trasmissioni alternano momenti di approfondimento e riflessione a letture di poeti e poetesse, celebri e voci meno conosciute.\n\nNell’ultima puntata del ciclo mensile, alcune parole chiave diventano un invito alla scrittura: i radioascoltatori possono comporre le proprie poesie e inviarle alla radio, per essere poi lette in trasmissione, dalla conduttrice o dagli stessi autori.\n\nPoetando è un laboratorio aperto, un dialogo poetico che trasforma l’ascolto in partecipazione.`,
                        image: '/logo.png',
                        spotifyUrl: 'https://open.spotify.com/show/example',
                        speakersList: [{ name: 'Lia Manzi', img: '' }]
                    });
                }

                setPrograms(data);
            } catch (error) {
                console.error("Errore nel caricamento dei programmi", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProgram) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedProgram]);

    return (
        <div className="bg-neutral-50/50 min-h-screen py-16">
            <Container>
                {/* Header */}
                <div className="mb-16 animate-fade-in text-center px-4">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <HiMicrophone className="text-primary-500" size={24} />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 block">Podcast & Dirette</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-neutral-900">
                        I Nostri <span className="gradient-text">Programmi</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-neutral-600 leading-relaxed mb-10 mx-auto">
                        Riascolta i nostri migliori contenuti in streaming. La voce dei concittadini, l'inclusione e i programmi esclusivi di Radio Mayday, sempre disponibili per te.
                    </p>
                    <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto"></div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-neutral-400">
                        <HiArrowPath className="animate-spin mb-4" size={48} />
                        <p className="font-medium tracking-widest uppercase text-sm">Caricamento Programmi...</p>
                    </div>
                ) : (
                    <>
                        {/* Programs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            {programs.map((program, index) => (
                                <div key={program.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                    <Card variant="glass" className="h-full flex flex-col p-0 overflow-hidden border-none shadow-soft-lg group hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
                                        {/* Copertina Programma */}
                                        <div className="relative aspect-video overflow-hidden bg-neutral-100">
                                            <img 
                                                src={program.image} 
                                                alt={program.title} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                onError={(e) => { e.target.src = '/logo.png'; }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                            
                                            {/* Conduttori (Pillole Avatars) */}
                                            <div className="absolute bottom-4 left-4 flex items-center -space-x-3">
                                                {program.speakersList?.map((speaker, idx) => (
                                                    <div 
                                                        key={idx} 
                                                        className="w-10 h-10 rounded-full border-2 border-white bg-neutral-800 overflow-hidden shadow-md"
                                                        title={speaker.name}
                                                    >
                                                        <img 
                                                            src={speaker.img || '/img/staff/placeholder.png'} 
                                                            alt={speaker.name} 
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => { e.target.src = '/img/staff/placeholder.png'; }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Info Programma */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-xl font-bold text-neutral-900 mb-2">{program.title}</h3>
                                            
                                            {/* Truncated description */}
                                            <p className="text-neutral-500 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {program.description || 'Programma di approfondimento e intrattenimento targato Radio Mayday.'}
                                            </p>
                                            
                                            <button 
                                                onClick={() => setSelectedProgram(program)}
                                                className="text-primary-500 text-xs font-bold uppercase tracking-wider mb-6 hover:text-primary-600 transition-colors inline-block text-left"
                                            >
                                                Leggi di più →
                                            </button>
                                            
                                            {/* Pulsante Spotify / Azione */}
                                            <div className="mt-auto">
                                                {program.spotifyUrl ? (
                                                    <button 
                                                        onClick={(e) => { e.stopPropagation(); window.open(program.spotifyUrl, '_blank'); }}
                                                        className="w-full py-3 px-4 rounded-xl bg-[#1DB954]/10 text-[#1DB954] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#1DB954] hover:text-white transition-colors border border-[#1DB954]/20 hover:border-[#1DB954]"
                                                    >
                                                        <FaSpotify size={18} />
                                                        Ascolta su Spotify
                                                    </button>
                                                ) : (
                                                    <div className="w-full py-3 px-4 rounded-xl bg-neutral-100 text-neutral-400 font-bold text-sm text-center border border-neutral-200 cursor-not-allowed">
                                                        Podcast in arrivo
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>

                        {/* Mixcloud Fallback / Archivio Storico */}
                        <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-neutral-200 flex-1"></div>
                                <h3 className="text-xl font-bold text-neutral-900 uppercase tracking-widest text-center">Archivio Mixcloud</h3>
                                <div className="h-px bg-neutral-200 flex-1"></div>
                            </div>
                            <Card variant="glass" className="p-0 overflow-hidden border-none shadow-soft-lg">
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
                    </>
                )}
            </Container>

            {/* Modal Detail Screen */}
            {selectedProgram && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
                    onClick={() => setSelectedProgram(null)}
                >
                    <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-md"></div>
                    
                    <div 
                        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up h-fit max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Hero Image in Modal */}
                        <div className="relative h-48 md:h-64 shrink-0">
                            <img 
                                src={selectedProgram.image} 
                                alt={selectedProgram.title} 
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = '/logo.png'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                            <button 
                                onClick={() => setSelectedProgram(null)}
                                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                            >
                                <HiXMark size={24} />
                            </button>
                        </div>

                        {/* Modal Content container - Scrollable */}
                        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500">Programma</span>
                                {selectedProgram.speakersList?.length > 0 && (
                                    <>
                                        <div className="w-1 h-1 rounded-full bg-neutral-300"></div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                                            Con {selectedProgram.speakersList.map(s => s.name).join(' & ')}
                                        </span>
                                    </>
                                )}
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6 leading-tight">
                                {selectedProgram.title}
                            </h2>
                            
                            {/* Full Description with preserved white-space */}
                            <div className="text-neutral-600 leading-relaxed text-base md:text-lg space-y-4 whitespace-pre-line mb-4">
                                {selectedProgram.description || 'Nessuna descrizione disponibile.'}
                            </div>
                        </div>

                        {/* Persistent Footer Actions - Fixed at bottom */}
                        <div className="shrink-0 p-6 md:px-10 md:pb-8 bg-white border-t border-neutral-100 flex flex-col sm:flex-row gap-4">
                            {selectedProgram.spotifyUrl ? (
                                <button 
                                    onClick={() => window.open(selectedProgram.spotifyUrl, '_blank')}
                                    className="flex-1 py-4 rounded-2xl bg-[#1DB954] text-white font-black text-sm flex items-center justify-center gap-3 hover:bg-[#1ed760] transition-all shadow-lg shadow-[#1DB954]/20"
                                >
                                    <FaSpotify size={20} />
                                    ASCOLTA TUTTE LE PUNTATE SU SPOTIFY
                                </button>
                            ) : (
                                <div className="flex-1 py-4 rounded-2xl bg-neutral-100 text-neutral-400 font-bold text-sm text-center border border-neutral-200 cursor-not-allowed">
                                    PODCAST IN ARRIVO
                                </div>
                            )}
                            <button 
                                onClick={() => setSelectedProgram(null)}
                                className="px-8 py-4 rounded-2xl border border-neutral-200 text-neutral-500 font-bold text-sm hover:bg-neutral-50 transition-colors"
                            >
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProgrammiScreen;
