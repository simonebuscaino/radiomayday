import { Link } from "react-router-dom";
import { HiPlay, HiPause } from "react-icons/hi2";
import { Card, Container, Button } from "../../components/UI";
import { useGlobalContext } from "../../context";
import Crew from "./Crew";
import "./HomeScreen.css";
import PalinsestoToday from "./PalinsestoToday";

function HomeScreen() {
  const { isPlaying, isLoading } = useGlobalContext();

  const toggleRadio = () => {
    // Dispatch custom event that PlayerRadio is listening for
    const event = new CustomEvent('toggle-radio-play');
    window.dispatchEvent(event);
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <Container>
          {/* Hero Section */}
          <section className="py-16 md:py-20 animate-fade-in text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="text-secondary-500 font-bold tracking-widest uppercase text-sm mb-4 block">Un segnale d'emergenza</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Una chiamata collettiva.<br />
                <span className="gradient-text">Un progetto culturale.</span>
              </h1>
              <p className="text-neutral-600 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                Ascolta il suono di chi non si arrende, ma risponde. Scopri l'inclusione attraverso la forza della musica e delle parole su Radio Mayday.
              </p>
              <div className="flex flex-col sm:flex-row md:justify-start justify-center items-center gap-4">
                <Link to="/chi-siamo">
                  <Button variant="premium" size="lg">Scopri il Progetto</Button>
                </Link>
                <Link to="/palinsesto">
                  <Button variant="outline" size="lg" className="border-neutral-200 hover:border-primary-500">I Nostri Programmi</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative flex justify-center mt-10 md:mt-0 group/hero">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full blur-[80px] opacity-20 animate-scale-pulse"></div>
              <div className="relative z-10">
                <img src="/logo.png" alt="Radio Mayday" className="w-64 md:w-80 max-w-full hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />

                {/* Hero Play Button Overlay */}
                <button
                  onClick={toggleRadio}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl border border-white/20 backdrop-blur-md z-20 group-hover/hero:scale-110 active:scale-95
                    ${isPlaying || isLoading
                      ? 'bg-neutral-900/40 text-white'
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                    }`}
                >
                  {isLoading ? (
                    <div className="w-8 h-8 md:w-10 md:h-10 border-[3px] border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : isPlaying ? (
                    <HiPause size={48} className="md:size-14" />
                  ) : (
                    <HiPlay size={48} className="md:size-14 ml-2" />
                  )}

                  {/* Pulse Effect for Playing state */}
                  {isPlaying && !isLoading && (
                    <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20 pointer-events-none"></div>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section className="py-16 md:py-24 animate-slide-up">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-10 w-2 bg-primary-500 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Eventi in <span className="gradient-text">Programma</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Sanremo Event Card */}
              <Card hover variant="default" className="flex flex-col h-full group">
                <div className="overflow-hidden rounded-t-2xl relative aspect-video">
                  <img
                    src="/img/sanremo.jpg"
                    alt="Sanremo 2024"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white font-medium text-lg">Guarda i momenti migliori</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">Sanremo 2024</h3>
                  <p className="text-neutral-500 mb-8 flex-1">
                    Scopri tutto sulla partecipazione di Radio Mayday a Sanremo 2024. Interviste esclusive e backstage direttamente dalla città dei fiori.
                  </p>
                  <Link to="/eventi/sanremo">
                    <Button variant="premium" fullWidth size="lg">
                      Scopri di più
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* World Radio Day Card */}
              <Card hover variant="default" className="flex flex-col h-full group">
                <div className="overflow-hidden rounded-t-2xl relative aspect-video">
                  <img
                    src="/img/worldradioday2.jpg"
                    alt="World Radio Day"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white font-medium text-lg">Celebra con noi</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">World Radio Day</h3>
                  <p className="text-neutral-500 mb-8 flex-1">
                    Rivivi l'emozione del World Radio Day 2024. Una giornata dedicata alla forza della radio e alla sua capacità di connettere le persone.
                  </p>
                  <Link to="/eventi/worldradioday">
                    <Button variant="premium" fullWidth size="lg">
                      Scopri di più
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </section>

          {/* Chat Room Section */}
          <section className="py-16 md:py-24 animate-slide-up [animation-delay:200ms]">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-10 w-2 bg-secondary-500 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Entra in <span className="gradient-text">Chat</span>
              </h2>
            </div>

            <Card variant="glass" className="overflow-hidden p-0 border-none shadow-premium">
              <iframe
                src="https://organizations.minnit.chat/681623609558937/Main?embed&nickname=Guest"
                title="chatRoom"
                width="100%"
                height="600px"
                style={{ border: "none" }}
                allowTransparency="true"
              ></iframe>
            </Card>
          </section>

          {/* Students & Palinsesto Section */}
          <section className="py-16 md:py-24 animate-slide-up [animation-delay:400ms]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Crew Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-2 bg-accent-500 rounded-full"></div>
                  <h2 className="text-3xl font-extrabold">Il Nostro <span className="text-primary-500">Staff</span></h2>
                </div>
                <Card variant="default" className="p-6 bg-neutral-50 border-none">
                  <Crew />
                </Card>
              </div>

              {/* Palinsesto Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-2 bg-primary-500 rounded-full"></div>
                  <h2 className="text-3xl font-extrabold">Oggi in <span className="text-primary-500">Onda</span></h2>
                </div>
                <Card variant="glass" className="p-8">
                  <PalinsestoToday />
                </Card>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}

export default HomeScreen;