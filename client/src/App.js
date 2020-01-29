import React from 'react';
import './App.css';
import Inicio from "./Pages/Inicio"
import Registro from "./Pages/Registro"
import Calculo from "./Pages/Calculo"
import Retiro from "./Pages/Retiro"
import NavTabs from "./Components/NavTabs"
import { BrowserRouter as Router, Route } from "react-router-dom"


class App extends React.Component{
  state = {
    loggedIn: true
  }
  render(){
  return (
    <div className="App">
      <Router>
        <div>
          <NavTabs/>
          <br></br>
          <Route exact path="/" component={Inicio}/>
          <Route exact path="/Registro" component={Registro}/>
          {this.state.loggedIn? 
          <Route exact path="/Calculo" component={Calculo}/>
        : ""} 
          {this.state.loggedIn?
          <Route exact path="/Retiro" component={Retiro}/>
        : ""}
        </div>
      </Router>
    </div>
  )};
}

export default App;
