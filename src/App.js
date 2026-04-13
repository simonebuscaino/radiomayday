import React, {useState, lazy, Suspense} from "react";
import './App.scss';
import Navbar from './layout/components/Navbar/Navbar';
import Footer from './layout/components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerRadio from "./components/PlayerRadio/PlayerRadio";
import ManutenzioneScreen from "./pages/ManutenzioneScreen/ManutenzioneScreen";
// import firebase from "./firebase";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
  
//core
import "primereact/resources/primereact.min.css";      

// Lazy load components for better performance
const HomeScreen = lazy(() => import('./pages/HomeScreen/HomeScreen'));
const ChiSiamoScreen = lazy(() => import('./pages/ChiSiamoScreen/ChiSiamoScreen'));
const PalinsestoScreen = lazy(() => import('./pages/PalinsestoScreen/PalinsestoScreen'));
const StaffScreen = lazy(() => import('./pages/StaffScreen/StaffScreen'));
const CorsiScreen = lazy(() => import('./pages/CorsiScreen/CorsiScreen'));
const GalleryScreen = lazy(() => import('./pages/GalleryScreen/GalleryScreen'));
const GalleryDetail = lazy(() => import('./pages/GalleryScreen/GalleryDetail/GalleryDetail'));
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
          {/* <Header/> */}
          <Navbar/>
          <Suspense fallback={<div className="text-center p-4">Caricamento...</div>}>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/chi-siamo" element={<ChiSiamoScreen />}/>
                <Route path="/palinsesto" element={<PalinsestoScreen />}/>
                <Route path="/staff" element={<StaffScreen />}/>
                <Route path="/corsi" element={<CorsiScreen />}/>
                <Route path="/gallery" element={<GalleryScreen />}/>
                <Route path="/gallery/:id" element={<GalleryDetail />}/>
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
