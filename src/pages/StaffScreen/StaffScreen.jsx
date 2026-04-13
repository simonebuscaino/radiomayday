import React, { useEffect, useState } from "react";
import { Container, Image } from "../../components/BootstrapCompat";
import { Card } from "../../components/UI";
import { voci as staticVoci, tecnici as staticTecnici, dj as staticDj } from "./staff";
import * as Icon from 'react-icons/bs';

function StaffSection({ title, color, members }) {
  if (!members || members.length === 0) return null;

  return (
    <div className="mb-20 animate-slide-up">
      <div className="flex items-center gap-4 mb-10">
        <div className={`h-10 w-2 rounded-full ${color}`}></div>
        <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((el, index) => (
          <div key={index} className="group">
            <Card hover variant="default" className="flex flex-col gap-6 p-6 h-full border-neutral-100 group-hover:border-primary-200 transition-all duration-500">
              <div className="w-full relative overflow-hidden rounded-2xl aspect-[4/5] shrink-0">
                <Image
                  src={el.img}
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
                  rounded
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent aria-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-4">
                  <h4 className="text-2xl font-black text-neutral-900 mb-1 group-hover:text-primary-500 transition-colors">
                    {el.name}
                  </h4>
                  <span className="text-sm font-bold tracking-widest uppercase text-neutral-400">
                    {el.roles}
                  </span>
                </div>
                <div className="flex gap-4 pt-4 border-t border-neutral-50 group-hover:border-neutral-100 transition-colors">
                  <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                    <Icon.BsFacebook size={20} />
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                    <Icon.BsInstagram size={20} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function StaffScreen() {
  const [voci, setVoci] = useState([]);
  const [tecnici, setTecnici] = useState([]);
  const [dj, setDj] = useState([]);

  useEffect(() => {
    // Caricamento dati locali
    setVoci(staticVoci);
    setTecnici(staticTecnici);
    setDj(staticDj);
  }, []);

  return (
    <div className="bg-neutral-50/50 min-h-screen py-16">
      <Container>
        <div className="mb-16 animate-fade-in text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 mb-2 block">Team</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-neutral-900">
            Il Nostro <span className="gradient-text">Staff</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed mb-10 text-center">
            La nostra più grande soddisfazione è quella di avere nello Staff Ufficiale gran parte dei ragazzi che hanno frequentato i nostri corsi e che oggi sono professionisti del settore.
          </p>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto"></div>
        </div>

        <StaffSection title="Speaker" color="bg-primary-500" members={voci} />
        <StaffSection title="Tecnici" color="bg-secondary-500" members={tecnici} />
        <StaffSection title="DJ" color="bg-accent-500" members={dj} />
      </Container>
    </div>
  );
}

export default StaffScreen;