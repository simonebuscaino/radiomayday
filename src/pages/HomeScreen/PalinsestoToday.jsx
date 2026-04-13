import React, { useEffect, useState } from "react";
import { HiMicrophone } from 'react-icons/hi2';
import { lun, mar, mer, gio, ven, sab, dom } from "../PalinsestoScreen/palinsesto";
import { Image } from "../../components/BootstrapCompat";

function PalinsestoToday() {
  const dateToday = new Date();
  const dayToday = dateToday.getDay();
  const [dayData, setDayData] = useState([]);

  useEffect(() => {
    switch (dayToday) {
      case 1: setDayData(lun); break;
      case 2: setDayData(mar); break;
      case 3: setDayData(mer); break;
      case 4: setDayData(gio); break;
      case 5: setDayData(ven); break;
      case 6: setDayData(sab); break;
      case 0: setDayData(dom); break;
      default: setDayData([]); break;
    }
  }, [dayToday]);

  return (
    <div className="flex flex-col gap-5 animate-slide-up">
      {dayData.length === 0 ? (
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl border border-neutral-100 py-12 text-center shadow-soft-sm">
          <p className="text-neutral-400 font-medium italic">Nessun appuntamento per oggi</p>
        </div>
      ) : (
        dayData.map((el, index) => {
          const now = new Date();
          const currentTime = now.getHours() * 60 + now.getMinutes();
          const [startH, startM] = el.start.split(':').map(Number);
          const [endH, endM] = el.end.split(':').map(Number);
          const startTime = startH * 60 + startM;
          const endTime = endH * 60 + endM;
          const isLive = currentTime >= startTime && currentTime < endTime;

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
              <div className={`flex sm:flex-col items-center justify-center gap-3 sm:gap-1 px-6 py-4 sm:py-6 sm:w-24 shrink-0 transition-colors duration-500
                ${isLive ? 'bg-primary-500 text-white' : 'bg-neutral-50 text-neutral-500 border-b sm:border-b-0 sm:border-r border-neutral-100'}`}
              >
                <div className="text-center">
                  <div className={`text-[8px] font-black uppercase tracking-[0.2em] mb-0.5 ${isLive ? 'text-primary-100' : 'text-neutral-400'}`}>Start</div>
                  <div className="text-xl font-black tabular-nums leading-none">{el.start}</div>
                </div>
                <div className={`hidden sm:block w-4 h-px my-1 ${isLive ? 'bg-primary-300' : 'bg-neutral-200'}`}></div>
                <div className="text-center">
                  <div className={`text-[8px] font-black uppercase tracking-[0.2em] mb-0.5 ${isLive ? 'text-primary-100' : 'text-neutral-400'}`}>End</div>
                  <div className="text-xl font-black tabular-nums leading-none">{el.end}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 items-center gap-4 p-4 sm:p-5">
                {/* Photo */}
                <div className="shrink-0 relative">
                  <Image
                    src={el.img}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-1.5">
                    <h4 className="text-lg sm:text-xl font-black text-neutral-900 group-hover:text-primary-500 transition-colors leading-tight truncate">
                      {el.program}
                    </h4>
                    {isLive && (
                      <span className="shrink-0 mt-0.5 inline-flex items-center gap-1.5 bg-primary-500 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full animate-pulse">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        Live
                      </span>
                    )}
                  </div>

                  {/* Speakers */}
                  <div className="flex items-center gap-2">
                    <div className="shrink-0 w-7 h-7 rounded-lg bg-neutral-100 flex items-center justify-center text-primary-500">
                      <HiMicrophone size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-0.5">Host</p>
                      <p className="text-xs text-neutral-800 font-bold truncate">
                        {el.speakers}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duration pill - desktop only */}
                <div className="hidden md:flex shrink-0 flex-col items-center justify-center bg-neutral-50 rounded-2xl px-3 py-2 border border-neutral-100 text-center gap-0.5">
                  <span className="text-[8px] font-black uppercase tracking-widest text-neutral-400">Durata</span>
                  <span className="text-sm font-black text-neutral-700">
                    {endH - startH}h{Math.abs(endM - startM) !== 0 ? `${Math.abs(endM - startM)}m` : ''}
                  </span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default PalinsestoToday;