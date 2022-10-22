import React from "react";
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from './components/Body/HomeScreen/HomeScreen';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col} from "react-bootstrap";
import PalinsestoScreen from './components/Body/PalinsestoScreen/PalinsestoScreen';
import StaffScreen from './components/Body/StaffScreen/StaffScreen';
import Header from './components/Header/Header';
import ProgrammiScreen from './components/Body/ProgrammiScreen/ProgrammiScreen';
import PlayerRadio from "./components/Body/PlayerRadio/PlayerRadio";
// import firebase from "./firebase";

function App() {
  return (
    <div className="App">
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
