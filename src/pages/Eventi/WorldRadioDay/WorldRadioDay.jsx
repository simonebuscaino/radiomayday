import React from "react";
import { Container, Row, Col, Image } from "../../../components/BootstrapCompat";
import { Card } from "../../../components/UI";
import { HiGlobeAlt } from 'react-icons/hi2';
import "./WorldRadioDay.scss";

function WorldRadioDay() {
  return (
    <div className="bg-neutral-50/50 min-h-screen py-16 text-center md:text-left">
      <Container>
        {/* Header Section */}
        <div className="mb-16 animate-fade-in group px-4">
          <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
            <HiGlobeAlt className="text-primary-500 group-hover:rotate-12 transition-transform duration-500" size={24} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 block">International Event</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-neutral-900 break-words">
            World Radio <span className="gradient-text">Day 2024</span>
          </h1>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto md:ml-0"></div>
        </div>

        <Row className="gap-y-12 px-2">
          <Col md="12" className="animate-slide-up">
            <Card variant="glass" className="p-6 sm:p-8 md:p-12 border-none shadow-soft-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 mb-10 leading-tight border-l-4 border-accent-500 pl-4 text-start">
                World Radio Day 2024: <span className="text-accent-600">il 13 febbraio a Milano</span> la Giornata Mondiale della Radio si celebra insieme ai suoi protagonisti
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-neutral-600 leading-relaxed text-base sm:text-lg text-start overflow-hidden">
                <div className="space-y-6">
                  <p>
                    Il <strong>13 febbraio 2024</strong> torna il <strong>World Radio Day</strong>, la Giornata Mondiale della Radio istituita dall’UNESCO. L’evento, organizzato da <a href="https://www.radiospeaker.it/" className="text-primary-500 hover:underline font-bold" target="_blank" rel="noopener noreferrer">Radio Speaker</a>, celebra il mezzo Radio in tutte le sue espressioni.
                  </p>
                  <p>
                    Le più grandi Star delle Radio italiane si avvicenderanno in due sale contemporanee festeggiare i 100 anni della Radio.
                  </p>
                  <p>
                    L'evento si svolgerà presso il prestigioso <strong>Talent Garden Calabiana</strong> a Milano e sarà trasmesso in diretta streaming su <a href="http://www.worldradioday.it/" className="text-primary-500 hover:underline font-bold" target="_blank" rel="noopener noreferrer">worldradioday.it</a>.
                  </p>
                </div>
                
                <div className="space-y-6 bg-neutral-50/50 p-6 rounded-2xl border border-neutral-100 h-full">
                  <h4 className="text-xl font-bold text-neutral-900 mb-4">Ospiti Confermati:</h4>
                  <p className="text-base text-neutral-500 leading-relaxed">
                    <strong>Linus</strong>, <strong>Albertino</strong>, <strong>Giuseppe Cruciani</strong>, <strong>Ringo</strong>, <strong>Federica Gentile</strong>, <strong>Lucilla Agosti</strong>, <strong>WAD</strong>, <strong>Marco Mazzoli</strong>, <strong>Gianluca Gazzoli</strong> e molti altri protagonisti dello showbiz.
                  </p>
                </div>
              </div>
            </Card>
          </Col>

          <Col md="12" className="animate-slide-up [animation-delay:200ms]">
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <Card variant="default" className="p-0 overflow-hidden border-none shadow-premium relative">
                <Image 
                  src="/img/worldradioday.jpg" 
                  width="100%" 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-[1.02]" 
                />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WorldRadioDay;