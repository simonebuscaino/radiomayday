import { useRef, useState, useEffect, useCallback } from "react";
import {
  HiPlay,
  HiPause,
  HiSpeakerWave,
  HiSpeakerXMark,
  HiChevronUp,
  HiChevronDown,
  HiShare
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./PlayerRadio.scss";

function PlayerRadio() {
  const { isPlaying, setIsPlaying, isLoading, setIsLoading } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(true);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [onAir, setOnAir] = useState({
    img: "/logo.png",
    program: "Radio Mayday",
    speakers: ""
  });
  const [songName, setSongName] = useState("In attesa di dati dalla regia...");

  // Toggle function memoized to avoid re-renders and fix ESLint warnings
  const togglePlay = useCallback(() => {
    if (isPlaying || isLoading) {
      refPlayer.current.pause();
      setIsPlaying(false);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setIsPlaying(true);
      refPlayer.current.load();
      refPlayer.current.play().catch(e => {
        console.error(e);
        setIsLoading(false);
        setIsPlaying(false);
      });
    }
  }, [isPlaying, isLoading, setIsPlaying, setIsLoading]);

  // Custom event listener to allow other components to toggle playback
  useEffect(() => {
    const handleToggle = () => togglePlay();
    window.addEventListener('toggle-radio-play', handleToggle);
    return () => window.removeEventListener('toggle-radio-play', handleToggle);
  }, [togglePlay]);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("https://srvone.radio.asvhosting.com/api/nowplaying/3");
        const data = await res.json();
        if (data?.now_playing?.song?.text) {
          setSongName(data.now_playing.song.text);
          setOnAir(prev => ({
            ...prev,
            img: data.now_playing.song.art || "/logo.png"
          }));
        }
      } catch (error) {
        console.error("Failed to fetch now playing data", error);
      }
    };

    fetchNowPlaying();
    const intervalId = setInterval(fetchNowPlaying, 15000); // Poll every 15s
    return () => clearInterval(intervalId);
  }, []);

  const refPlayer = useRef();

  useEffect(() => {
    if (refPlayer.current) {
      refPlayer.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);


  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (e.target.value > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const shareLive = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Radio Mayday',
        text: 'Radio Mayday: Un Segnale di Inclusione e Rinascita',
        url: window.location.href,
      });
    }
  };

  return (
    <div className={`fixed left-0 right-0 z-50 px-4 md:px-8 pointer-events-none transition-all duration-500 ${isOpen ? "bottom-6" : "bottom-0"}`}>
      <div className={`max-w-5xl mx-auto pointer-events-auto relative transition-all duration-500 ease-in-out transform ${isOpen ? "translate-y-0" : "translate-y-full scale-[0.98] sm:scale-100"
        }`}>

        {/* Toggle Bar - Enhanced with Micro Controls */}
        <div className="absolute bottom-full left-0 right-0 flex justify-center mb-[-1px]">
          <div className="relative">
            {/* The Gradient Glow for Collapsed Player */}
            {!isOpen && isPlaying && (
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-t-2xl blur opacity-30 animate-pulse pointer-events-none"></div>
            )}
            <div className={`
              relative flex items-center bg-neutral-900/95 backdrop-blur-xl border border-white/10 border-b-0 rounded-t-2xl shadow-2xl transition-all duration-500
              ${!isOpen ? "px-2 py-1" : "px-4 pt-1"}
            `}>

              {/* Quick Play/Pause - Only visible when collapsed or as extra control */}
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className={`flex items-center justify-center rounded-full transition-all duration-300 ${isPlaying || isLoading
                  ? "w-8 h-8 bg-white/10 text-white hover:bg-white/20"
                  : "w-8 h-8 bg-primary-500 text-white shadow-lg shadow-primary-500/20 hover:scale-105"
                  }`}
                title={isPlaying || isLoading ? "Pausa" : "Play"}
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : isPlaying ? (
                  <HiPause size={16} />
                ) : (
                  <HiPlay size={16} className="ml-0.5" />
                )}
              </button>

              {/* Main Toggle Label */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-4 py-2 group"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-primary-400 transition-colors">
                    {isOpen ? "Chiudi Player" : (isPlaying ? "In Onda: Radio Mayday" : "Ascolta la Diretta")}
                  </span>
                  {!isOpen && isPlaying && (
                    <span className="text-[8px] text-primary-500 font-bold animate-pulse">LIVE ORA</span>
                  )}
                </div>

                {isOpen ? (
                  <HiChevronDown size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
                ) : (
                  <HiChevronUp size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className={`transition-all duration-700 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-10"
          }`}>
          <div className="bg-neutral-900/95 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 md:p-6 overflow-hidden relative">

            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-opacity duration-1000 ${isPlaying ? "opacity-100" : "opacity-0"}`}></div>

            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">

              {/* Cover & Visualizer */}
              <div className="relative group shrink-0">
                <div className={`absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-md opacity-0 transition-opacity duration-500 ${isPlaying ? "opacity-30 group-hover:opacity-50" : ""}`}></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-neutral-800 border border-white/5 shadow-xl">
                  <img
                    src={onAir.img}
                    alt="On Air"
                    className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? "scale-105" : "scale-100"}`}
                  />
                  {isPlaying && !isLoading && (
                    <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="flex gap-1.5 items-end h-8">
                        <div className="w-1.5 bg-primary-500 rounded-full animate-[bar1_0.8s_infinite]"></div>
                        <div className="w-1.5 bg-primary-400 rounded-full animate-[bar2_1.1s_infinite]"></div>
                        <div className="w-1.5 bg-primary-300 rounded-full animate-[bar3_0.6s_infinite]"></div>
                        <div className="w-1.5 bg-secondary-500 rounded-full animate-[bar2_0.9s_infinite]"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Info Section */}
              <div className="flex-1 min-w-0 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
                  <div className={`w-2 h-2 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-neutral-600"}`}></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Diretta Live</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black text-white truncate mb-1">
                  {onAir.program}
                </h4>
                <div className="flex items-center justify-center md:justify-start gap-3 text-neutral-400 text-sm">
                  <span className="inline-block truncate">
                    {songName}
                  </span>
                </div>
              </div>

              {/* Controls Section */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">

                {/* Volume Slider - Desktop Only for better UI */}
                <div className="hidden sm:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <button onClick={toggleMute} className="text-neutral-400 hover:text-white transition-colors">
                    {isMuted || volume === 0 ? <HiSpeakerXMark size={20} /> : <HiSpeakerWave size={20} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="player-volume-slider w-24 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>

                {/* Main Play Button */}
                <button
                  onClick={togglePlay}
                  className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full transition-all duration-500 transform hover:scale-105 active:scale-95 ${isPlaying || isLoading
                    ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    : "bg-primary-500 text-white shadow-[0_0_30px_rgba(15,59,137,0.4)] hover:shadow-[0_0_40px_rgba(15,59,137,0.6)]"
                    }`}
                >
                  {isLoading ? (
                    <div className="w-8 h-8 border-[3px] border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : isPlaying ? (
                    <HiPause size={36} />
                  ) : (
                    <HiPlay size={36} className="ml-1" />
                  )}
                </button>

                {/* Secondary Actions */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={shareLive}
                    className="p-3 rounded-full bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                    title="Condividi"
                  >
                    <HiShare size={20} />
                  </button>
                  <button
                    onClick={() => window.open('https://wa.me/393778115091', '_blank')}
                    className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:border-white/20 transition-all group"
                  >
                    <FaWhatsapp size={16} className="text-green-500 group-hover:scale-110 transition-transform" />
                    Richiesta
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <audio
          src="https://sr8.inmystream.it/proxy/radiomayday?mp=/stream"
          ref={refPlayer}
          preload="none"
          onPlaying={() => { setIsLoading(false); setIsPlaying(true); }}
          onWaiting={() => setIsLoading(true)}
          onPause={() => { setIsPlaying(false); setIsLoading(false); }}
          onError={() => { setIsLoading(false); setIsPlaying(false); }}
        ></audio>
      </div>
    </div>
  );
}

export default PlayerRadio;