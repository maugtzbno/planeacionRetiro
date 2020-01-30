import React, { Component } from "react";
import Inputs from "../Components/Input"

class Inicio extends Component {
    state = {
        isActive: true
    }

    changeState = (value) =>{
        this.setState({
            isActive: false
        })
    }

    render(){
        if (this.state.isActive){
            return(
                <div className="container">
                    <Inputs onInputs={this.changeState}/>
                </div>
            )
        }
        else{
            return(
                <div className="container">
                    ¡Felicidades! Pronto seras contactado para poner orden a tu plan de retiro.
                </div>
            )
        }
    }
}

export default Inicio;