import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import "./App.css";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import SeventhPage from "./components/SeventhPage";
const App = () => (
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={FirstPage} />
        <Route exact path='/courses/logic' component={SecondPage} />
        <Route exact path='/courses/logic/second' component={ThirdPage} />
        <Route exact path='/courses/logic/third' component={FourthPage} />
        <Route exact path='/courses/logic/fourth' component={FifthPage} />
        <Route exact path='/courses/logic/fifth' component={SixthPage} />
        <Route exact path='/courses/logic/sixth' component={SeventhPage} />
      </Switch>
    </Router>
  </div>
);

export default App;
