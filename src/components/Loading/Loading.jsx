import React from 'react';

function Loading({ text = "Caricamento...", size = "md" }) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4"
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 animate-fade-in">
      <div className="relative">
        {/* Outer pulse */}
        <div className={`${sizeClasses[size] || sizeClasses.md} border-primary-500/20 rounded-full absolute inset-0 animate-ping`}></div>
        {/* Main spinner */}
        <div className={`${sizeClasses[size] || sizeClasses.md} border-neutral-200 border-t-primary-500 rounded-full animate-spin relative z-10`}></div>
      </div>
      {text && (
        <span className="mt-4 text-sm font-bold tracking-[0.2em] uppercase text-neutral-400 animate-pulse">
          {text}
        </span>
      )}
    </div>
  );
}

export default Loading;
