import React, {useState} from "react";
import './App.scss';
import Navbar from './layout/components/Navbar/Navbar';
import Footer from './layout/components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from './pages/HomeScreen/HomeScreen';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col} from "react-bootstrap";
import PalinsestoScreen from './pages/PalinsestoScreen/PalinsestoScreen';
import StaffScreen from './pages/StaffScreen/StaffScreen';
import Header from './layout/components/Header/Header';
import ProgrammiScreen from './pages/ProgrammiScreen/ProgrammiScreen';
import PlayerRadio from "./components/PlayerRadio/PlayerRadio";
import { useGlobalContext } from "./context";
import ChiSiamoScreen from "./pages/ChiSiamoScreen/ChiSiamoScreen";
import ManutenzioneScreen from "./pages/ManutenzioneScreen/ManutenzioneScreen";
import CorsiScreen from "./pages/CorsiScreen/CorsiScreen";
import GalleryScreen from "./pages/GalleryScreen/GalleryScreen";
import GalleryDetail from "./pages/GalleryScreen/GalleryDetail/GalleryDetail";
import WorldRadioDay from "./pages/Eventi/WorldRadioDay/WorldRadioDay";
import Sanremo from "./pages/Eventi/Sanremo/Sanremo";
// import firebase from "./firebase";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";      

function App() {
  const {isMobileDisplay} = useGlobalContext();
  const [manutenzione, setManutenzione] = useState(false);

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
          <Switch>
              <Route path="/" exact component={HomeScreen}/>
              <Route path="/chi-siamo" exact component={ChiSiamoScreen}/>
              <Route path="/palinsesto" exact component={PalinsestoScreen}/>
              <Route path="/staff" exact component={StaffScreen}/>
              <Route path="/corsi" exact component={CorsiScreen}/>
              <Route path="/gallery" exact component={GalleryScreen}/>
              <Route path="/gallery/:id" exact component={GalleryDetail}/>
              <Route path="/eventi/worldradioday" exact component={WorldRadioDay}/>
              <Route path="/eventi/sanremo" exact component={Sanremo}/>
              <Route path="*" exact component={HomeScreen}/>
              {/* <Route path="/programmi" exact component={ProgrammiScreen}/> */}
          </Switch>
          
          <Footer/>
          <PlayerRadio/>
        </Router>
    </div>
  );
}

export default App;
