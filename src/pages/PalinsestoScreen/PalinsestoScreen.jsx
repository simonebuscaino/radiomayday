import React, { useEffect, useState } from "react";
import { Container, Image } from "../../components/BootstrapCompat";
import { HiCalendarDays, HiMicrophone } from 'react-icons/hi2';
import { lun, mar, mer, gio, ven, sab, dom } from "./palinsesto";
import "./PalinsestoScreen.css";

function PalinsestoScreen() {
  const dateToday = new Date();
  const dayToday = dateToday.getDay();

  const allDays = [
    { label: 'Lun', full: 'Lunedì', value: 1 },
    { label: 'Mar', full: 'Martedì', value: 2 },
    { label: 'Mer', full: 'Mercoledì', value: 3 },
    { label: 'Gio', full: 'Giovedì', value: 4 },
    { label: 'Ven', full: 'Venerdì', value: 5 },
    { label: 'Sab', full: 'Sabato', value: 6 },
    { label: 'Dom', full: 'Domenica', value: 0 }
  ];

  const [daySelected, setDaySelected] = useState(dayToday);
  const [dayData, setDayData] = useState([]);

  useEffect(() => {
    switch (daySelected) {
      case 1: setDayData(lun); break;
      case 2: setDayData(mar); break;
      case 3: setDayData(mer); break;
      case 4: setDayData(gio); break;
      case 5: setDayData(ven); break;
      case 6: setDayData(sab); break;
      case 0: setDayData(dom); break;
      default: setDayData([]); break;
    }
  }, [daySelected]);

  return (
    <div className="bg-neutral-50/50 min-h-screen py-16">
      <Container>
        {/* Header */}
        <div className="mb-12 animate-fade-in text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <HiCalendarDays className="text-primary-500" size={24} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-500 block">Schedule</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-neutral-900">
            Il Nostro <span className="gradient-text">Palinsesto</span>
          </h1>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full mx-auto"></div>
        </div>

        {/* Day Tabs */}
        <div className="mb-10 animate-slide-up">
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl shadow-soft-md border border-neutral-100">
            {allDays.map((day) => (
              <button
                key={day.value}
                onClick={() => setDaySelected(day.value)}
                className={`flex-1 min-w-[80px] py-3 px-4 rounded-xl font-bold transition-all duration-300 text-sm ${daySelected === day.value
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                  }`}
              >
                <span className="md:hidden">{day.label}</span>
                <span className="hidden md:inline">{day.full}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List */}
        <div className="flex flex-col gap-4 animate-slide-up [animation-delay:200ms]">
          {dayData.length === 0 ? (
            <div className="bg-white rounded-3xl border border-neutral-100 py-20 text-center shadow-soft-md">
              <HiCalendarDays className="text-neutral-300 mx-auto mb-4" size={48} />
              <p className="text-xl text-neutral-400 font-medium italic">Nessun appuntamento programmato per questo giorno</p>
            </div>
          ) : (
            dayData.map((el, index) => {
              const now = new Date();
              const currentTime = now.getHours() * 60 + now.getMinutes();
              const [startH, startM] = el.start.split(':').map(Number);
              const [endH, endM] = el.end.split(':').map(Number);
              const startTime = startH * 60 + startM;
              const endTime = endH * 60 + endM;
              const isLive = daySelected === dayToday && currentTime >= startTime && currentTime < endTime;

              return (
                <div
                  key={index}
                  className={`group flex flex-col sm:flex-row rounded-3xl overflow-hidden shadow-soft-md border transition-all duration-500 bg-white
                    ${isLive
                      ? 'border-primary-400 shadow-lg shadow-primary-500/15 scale-[1.01]'
                      : 'border-neutral-100 hover:shadow-soft-lg hover:border-neutral-200'
                    }`}
                >
                  {/* Time Column */}
                  <div className={`flex sm:flex-col items-center justify-center gap-3 sm:gap-1 px-6 py-4 sm:py-8 sm:w-28 shrink-0 transition-colors duration-500
                    ${isLive ? 'bg-primary-500 text-white' : 'bg-neutral-50 text-neutral-500 border-b sm:border-b-0 sm:border-r border-neutral-100'}`}
                  >
                    <div className="text-center">
                      <div className={`text-[9px] font-black uppercase tracking-[0.2em] mb-0.5 ${isLive ? 'text-primary-100' : 'text-neutral-400'}`}>Inizio</div>
                      <div className="text-2xl font-black tabular-nums leading-none">{el.start}</div>
                    </div>
                    <div className={`hidden sm:block w-6 h-px my-1 ${isLive ? 'bg-primary-300' : 'bg-neutral-200'}`}></div>
                    <div className="text-center">
                      <div className={`text-[9px] font-black uppercase tracking-[0.2em] mb-0.5 ${isLive ? 'text-primary-100' : 'text-neutral-400'}`}>Fine</div>
                      <div className="text-2xl font-black tabular-nums leading-none">{el.end}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 items-center gap-5 p-5 sm:p-6">

                    {/* Photo */}
                    <div className="shrink-0 relative">
                      <Image
                        src={el.img}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      {/* Program name + Live badge */}
                      <div className="flex items-start gap-3 mb-2">
                        <h4 className="text-xl sm:text-2xl font-black text-neutral-900 group-hover:text-primary-500 transition-colors leading-tight">
                          {el.program}
                        </h4>
                        {isLive && (
                          <span className="shrink-0 mt-1 inline-flex items-center gap-1.5 bg-primary-500 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full animate-pulse">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            Live
                          </span>
                        )}
                      </div>

                      {/* Speakers */}
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-primary-500">
                          <HiMicrophone size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">Condotto da</p>
                          <p className="text-sm text-neutral-800 font-bold truncate">
                            {el.speakers}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Duration pill - desktop only */}
                    <div className="hidden lg:flex shrink-0 flex-col items-center justify-center bg-neutral-50 rounded-2xl px-4 py-3 border border-neutral-100 text-center gap-0.5">
                      <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Durata</span>
                      <span className="text-lg font-black text-neutral-700">{endH - startH}h{(endM - startM) !== 0 ? `${Math.abs(endM - startM)}m` : ''}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
}

export default PalinsestoScreen;