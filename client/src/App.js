import React from 'react';
import './App.css';
import Inicio from "./Pages/Inicio"
import Calculo from "./Pages/Calculo"
import Retiro from "./Pages/Retiro"
import Contacto from "./Pages/Contacto"
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
          <Route exact path="/Calculo" component={Calculo}/>
          <Route exact path="/Retiro" component={Retiro}/>
          <Route exact path="/Contacto" component={Contacto}/>
        </div>
      </Router>
    </div>
  )};
}

export default App;
