import React from "react";
import { Container, Row, Col, Image } from "../../components/BootstrapCompat";
import { Card } from "../../components/UI";
import "./ChiSiamoScreen.scss";

function ChiSiamoScreen() {
  return (
    <div className="bg-neutral-50/50 min-h-screen py-16">
      <Container>
        <div className="mb-12 animate-fade-in text-center px-4">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 mb-2 block">Story</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 break-words">
            Chi <span className="gradient-text">Siamo</span>
          </h1>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto"></div>
        </div>

        <Row className="gap-y-12 items-center px-2">
          <Col md="5" className="animate-slide-up">
            <div className="relative group mx-auto max-w-sm md:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Card variant="default" className="p-0 overflow-hidden border-none shadow-premium relative">
                <Image 
                  src="/img/TroppFunRadio_locandinaPresentazioneUfficiale.jpeg" 
                  width="100%" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </Card>
            </div>
          </Col>
          
          <Col md="7" className="animate-slide-up [animation-delay:200ms]">
            <Card variant="glass" className="p-6 sm:p-8 md:p-10 border-none">
              <h4 className="text-xl sm:text-2xl font-bold mb-6 text-neutral-900 border-l-4 border-secondary-500 pl-4 leading-tight">
                TROPP FUN RADIO, <span className="text-secondary-600">PRIMA RADIO INTERSCOLASTICA D'ITALIA</span>
              </h4>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-base sm:text-lg overflow-hidden">
                <p>
                  Nasce nella Città di Sarno, a seguito del concorso <strong>LIBERA LA TUA CREATIVITÀ'</strong> tenutosi Giovedì 14 luglio 2022 presso i giardini di Villa Lanzara.
                </p>
                <p>
                  Grazie alla fusione con l'emittente RRC, acquisisce la possibilità tramite concessione ministeriale di trasmettere anche in <strong>DAB+ (Digital Audio Broadcasting)</strong> in tutta la regione della Campania, permettendo l'ascolto anche nelle auto di nuova generazione.
                </p>
                <p>
                  Offriamo corsi di radio gratuiti ai ragazzi del territorio condotti da esperti del campo, raccogliendo il pieno consenso delle scuole locali e di partner imprenditoriali che sostengono l'iniziativa.
                </p>
                <p className="italic text-neutral-500 border-t border-neutral-100 pt-6">
                  Lo staff ha avuto l'opportunità di prendere parte al <strong>73esimo FESTIVAL DI SANREMO</strong>, confrontandosi con autori e artisti dello showbiz, portando un'aria fresca e giovane nel mondo dell'entertainment.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChiSiamoScreen;