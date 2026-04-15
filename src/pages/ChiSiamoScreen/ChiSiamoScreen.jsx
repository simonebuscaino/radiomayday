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
                  src="/img/banner-mayday.jpg"
                  width="100%"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </Card>
            </div>
          </Col>

          <Col md="7" className="animate-slide-up [animation-delay:200ms]">
            <Card variant="glass" className="p-6 sm:p-8 md:p-10 border-none">
              <h4 className="text-xl sm:text-2xl font-bold mb-6 text-neutral-900 border-l-4 border-secondary-500 pl-4 leading-tight">
                RADIO MAYDAY, <span className="text-secondary-600">UN SEGNALE DI INCLUSIONE E RINASCITA</span>
              </h4>
              <div className="space-y-6 text-neutral-600 leading-relaxed text-base sm:text-lg overflow-hidden">
                <p>
                  Radio Mayday non è soltanto una stazione radiofonica, ma un progetto culturale e sociale nato con l'obiettivo di dare voce a chi spesso non ne ha. Il nome stesso rappresenta una chiamata collettiva: un invito a rispondere, a partecipare e a superare ogni barriera attraverso la forza della musica e della parola.
                </p>
                <p>
                  <strong className="text-neutral-800">L'Inclusione come Cuore Pulsante</strong><br />
                  La radio si distingue per il suo impegno concreto verso l'accessibilità e l'abbattimento dei pregiudizi. Ne è l'emblema il programma "Doin' it Anyway": condotto da uno speaker non vedente, il format racconta storie di persone con disabilità che hanno superato sfide straordinarie, dimostrando che il talento e la determinazione non conoscono limiti. Radio Mayday è, dunque, uno spazio dove la diversità diventa ricchezza e dove il microfono è aperto a tutti.
                </p>
                <p>
                  <strong className="text-neutral-800">Un Palinsesto per ogni Passione</strong><br />
                  L'offerta editoriale è un mix equilibrato tra impegno sociale, cultura e sano intrattenimento: cultura ("Kairòs", "Pagine Assieme", "Poetando"), satira ("Ring"), nerd culture ("Nerd Zone"), leggerezza ("Deca Dica", "Weekend Time"), sport ("Bar Sport", "11 metri", "Sportiamo"), tanta musica dai generi vintage alla elettronica, e informazione sul territorio ("Spazio Sud", "8 Secondi", "Pop News").
                </p>
                <p className="italic text-neutral-500 border-t border-neutral-100 pt-6">
                  Con radici nel Sud (provincia di Napoli) ma una visione globale, trasmettiamo in DAB+ in tutta la Campania, con micro-presidi a Bologna, Torino, Toscana e Puglia.<br />
                  <strong className="text-primary-600">"Il suono di chi non si arrende, ma risponde."</strong>
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