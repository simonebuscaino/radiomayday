import React from "react";
import { Container, Row, Col, Image } from "../../../components/BootstrapCompat";
import { Card } from "../../../components/UI";
import { HiMusicalNote } from 'react-icons/hi2';
import "./Sanremo.scss";

function Sanremo() {
  return (
    <div className="bg-neutral-50/50 min-h-screen py-16">
      <Container>
        {/* Header Section */}
        <div className="mb-16 animate-fade-in text-center md:text-left px-4">
          <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
            <HiMusicalNote className="text-primary-500" size={24} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 block">Highlights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 break-words">
            Sanremo <span className="gradient-text">2024</span>
          </h1>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto md:ml-0"></div>
        </div>

        <Row className="gap-y-12 items-start px-2">
          <Col md="7" className="animate-slide-up order-2 md:order-1">
            <Card variant="glass" className="p-6 sm:p-8 md:p-10 border-none shadow-soft-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 mb-8 leading-tight border-l-4 border-secondary-500 pl-4">
                Radio Mayday al Festival di Sanremo 2024: <span className="text-primary-600">Un'Esperienza Unica</span>
              </h3>
              
              <div className="space-y-6 text-neutral-600 leading-relaxed text-base sm:text-lg overflow-hidden">
                <p>
                  Si rinnova l’appuntamento: Radio Mayday torna al festival di Sanremo, questa volta ancor più al centro dell'action con una postazione presso la sezione <strong>Writers al Palafiori</strong>.
                </p>
                <p>
                  Un'esperienza indimenticabile, con interviste esclusive, collegamenti in diretta e una serie di sorprese preparate dagli inviati sul posto e dallo studio centrale.
                </p>
                <p>
                  I nostri ascoltatori potranno godere di sguardi dietro le quinte, scoprendo storie e dettagli intriganti sulla creazione delle canzoni e sulle emozioni degli artisti. I collegamenti in diretta trasporteranno il pubblico direttamente nel cuore dell'azione.
                </p>
                <p className="font-bold text-primary-500 tracking-wide uppercase text-sm pt-4 border-t border-neutral-100 italic">
                  "Stay tuned" per immergersi completamente nel mondo affascinante del Festival con Radio Mayday.
                </p>
              </div>
            </Card>
          </Col>

          <Col md="5" className="animate-slide-up [animation-delay:200ms] order-1 md:order-2">
            <div className="relative group max-w-sm mx-auto md:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <Card variant="default" className="p-0 overflow-hidden border-none shadow-premium relative">
                <Image 
                  src="/img/loc_sanremo.jpg" 
                  alt="Locandina Festival di Sanremo 2024" 
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" 
                />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sanremo;