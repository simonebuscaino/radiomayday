import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context';
import CookieConsent from "react-cookie-consent";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
      <CookieConsent buttonText="Ho capito" buttonStyle={{ background: "yellow", color: "black" }}>Questo sito utilizza i cookie per migliorare l'esperienza dell'utente.</CookieConsent>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
