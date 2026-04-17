import React, {useState, lazy, Suspense} from "react";
import './App.scss';
import Navbar from './layout/components/Navbar/Navbar';
import Footer from './layout/components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerRadio from "./components/PlayerRadio/PlayerRadio";
import ScrollToTop from "./components/ScrollToTop";
import ManutenzioneScreen from "./pages/ManutenzioneScreen/ManutenzioneScreen";

// Lazy load components for better performance
const HomeScreen = lazy(() => import('./pages/HomeScreen/HomeScreen'));
const ChiSiamoScreen = lazy(() => import('./pages/ChiSiamoScreen/ChiSiamoScreen'));
const PalinsestoScreen = lazy(() => import('./pages/PalinsestoScreen/PalinsestoScreen'));
const StaffScreen = lazy(() => import('./pages/StaffScreen/StaffScreen'));
const WorldRadioDay = lazy(() => import('./pages/Eventi/WorldRadioDay/WorldRadioDay'));
const Sanremo = lazy(() => import('./pages/Eventi/Sanremo/Sanremo'));
const ProgrammiScreen = lazy(() => import('./pages/ProgrammiScreen/ProgrammiScreen'));

function App() {
  const [manutenzione] = useState(false);

  if (manutenzione) {
    return (
      <ManutenzioneScreen/>
    )
  }
  return (
    <div className="App">
        <Router>
          <ScrollToTop />
          {/* <Header/> */}
          <Navbar/>
          <Suspense fallback={<div className="text-center p-4">Caricamento...</div>}>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/chi-siamo" element={<ChiSiamoScreen />}/>
                <Route path="/palinsesto" element={<PalinsestoScreen />}/>
                <Route path="/staff" element={<StaffScreen />}/>
                <Route path="/eventi/worldradioday" element={<WorldRadioDay />}/>
                <Route path="/eventi/sanremo" element={<Sanremo />}/>
                <Route path="/programmi" element={<ProgrammiScreen />}/>
                <Route path="*" element={<HomeScreen />}/>
            </Routes>
          </Suspense>
          
          <Footer/>
          <PlayerRadio/>
        </Router>
    </div>
  );
}

export default App;
