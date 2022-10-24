import React from "react";
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
// import firebase from "./firebase";

function App() {
  return (
    <div className="App pt-5">
        <Router>
          {/* <Header/> */}
          <Navbar/>
          <Switch>
              <Route path="/" exact component={HomeScreen}/>
              <Route path="/palinsesto" exact component={PalinsestoScreen}/>
              <Route path="/staff" exact component={StaffScreen}/>
              <Route path="/programmi" exact component={ProgrammiScreen}/>
          </Switch>
          
          <Footer/>
          <PlayerRadio/>
        </Router>
    </div>
  );
}

export default App;
