import React, { useEffect, useState } from "react";
import { duemilaventitre } from "../CorsiScreen/corsi";
import './Crew.css';

function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % duemilaventitre.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? duemilaventitre.length - 1 : prev - 1
    );
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!duemilaventitre || duemilaventitre.length === 0) {
    return (
      <p className="text-gray-600 text-center py-8">Non risultano studenti</p>
    );
  }

  const currentStudent = duemilaventitre[currentIndex];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-premium group">
      {/* Image Container */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src={currentStudent.img}
          alt={currentStudent.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary-400 mb-2 block animate-fade-in">Studente</span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg tracking-tight">
            {currentStudent.name}
          </h3>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePrevSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-neutral-900 p-3 rounded-full transition-all duration-300 shadow-xl border border-white/20"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNextSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-neutral-900 p-3 rounded-full transition-all duration-300 shadow-xl border border-white/20"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 pointer-events-none">
        {duemilaventitre.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`pointer-events-auto h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-primary-500 w-10"
                : "bg-white/30 w-3 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Crew;