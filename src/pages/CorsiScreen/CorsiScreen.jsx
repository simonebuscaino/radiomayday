import React from 'react';
import { duemilaventidue, duemilaventitre } from './corsi.js';
import { Container, Image } from '../../components/BootstrapCompat';
import { Card } from '../../components/UI';
import { HiAcademicCap } from 'react-icons/hi2';

function CourseSection({ title, label, color, students }) {
  return (
    <div className="mb-20 animate-slide-up">
      <div className="flex items-center gap-4 mb-10">
        <div className={`h-10 w-2 rounded-full ${color}`}></div>
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 block mb-1">{label}</span>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900">{title}</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {students.map((el, index) => (
          <div key={index} className="group">
            <Card hover variant="default" className="flex flex-col h-full border-neutral-100 group-hover:border-primary-200 transition-all duration-500 overflow-hidden">
              <div className="relative aspect-square overflow-hidden shrink-0">
                <Image 
                  src={el.img} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  width="100%"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 flex-1 flex items-center justify-center text-center">
                <h4 className="text-lg font-bold text-neutral-900 group-hover:text-primary-500 transition-colors tracking-tight">
                  {el.name}
                </h4>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function CorsiScreen() {
  return (
    <div className="bg-neutral-50/50 min-h-screen py-16 text-center">
      <Container>
        <div className="mb-16 animate-fade-in text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <HiAcademicCap className="text-primary-500" size={24} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 block">Education</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-neutral-900 text-center">
            I Nostri <span className="gradient-text">Corsi</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-lg text-neutral-600 leading-relaxed mb-10 mx-auto">
            <p>
              L'obiettivo principale del nostro progetto è entrare in tutte le scuole del territorio Campano. I ragazzi sono il fulcro della nostra Mission: insegnare loro il mondo della Radio al fine di farli diventare i professionisti di domani.
            </p>
            <p>
              Qui si formano i futuri <strong className="text-neutral-900">Speaker, DJ, Registi e Giornalisti</strong>. Noi siamo con i ragazzi, noi siamo la Generazione Z.
            </p>
          </div>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto"></div>
        </div>

        <CourseSection 
          title="1° Corso" 
          label="Inaugural Batch" 
          color="bg-primary-500" 
          students={duemilaventidue} 
        />
        
        <CourseSection 
          title="2° Corso" 
          label="Next Generation" 
          color="bg-secondary-500" 
          students={duemilaventitre} 
        />
      </Container>
    </div>
  );
}

export default CorsiScreen;