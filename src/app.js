import React, { Component } from "react";
import {
    Route,
    BrowserRouter
  } from "react-router-dom";
import Home from "./components/screens/Home";
import About from "./components/screens/About";
import Questions from "./components/screens/Questions";
import Login from "./components/screens/Login";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import { PrivateRoute } from './components/PrivateRoute';
import Logged from "./components/screens/Logged";
import CourseModules from "./components/screens/CourseModules";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <AppHeader/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/questions" component={Questions}/>
            <Route path="/login" component={Login}/>
            <Route path="/coursemodules" component={CourseModules}/>
            <PrivateRoute path="/logged" component={Logged} />
          </div>
          <AppFooter/>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default App;