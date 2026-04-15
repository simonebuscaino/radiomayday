import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context';
import CookieConsent from "react-cookie-consent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
      {/* <CookieConsent 
        buttonText="Ho Capito" 
        disableStyles={true}
        containerClasses="!bg-neutral-900/95 !backdrop-blur-md !p-4 md:!p-6 !fixed !bottom-0 !left-0 !right-0 !z-[100] !border-t !border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        contentClasses="!text-neutral-300 !text-sm !flex-1 !my-0"
        buttonClasses="!bg-primary-500 !text-white !font-bold !text-sm !py-2.5 !px-8 !rounded-full hover:!bg-primary-600 !transition-colors !shadow-lg !shadow-primary-500/20 whitespace-nowrap"
      >
        Questo sito utilizza i cookie per migliorare l'esperienza dell'utente.
      </CookieConsent> */}
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
