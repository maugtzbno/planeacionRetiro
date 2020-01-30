import React, { Component } from "react";
import FormInit from "../Components/FormInit"
import SpanTable from "../Components/SpanTable"
import API from "../utils"

class Calculo extends Component {

    state = {
        isActive: true,
        nombre: "",
        apellidoPat: "",
        apellidoMat: "",
        celular: ""
    }

    changeState = (value)=>{
        this.setState ({
            isActive: false,
            nombre: value.nombre,
            apellidoPat: value.apellidoPat,
            apellidoMat: value.apellidoMat,
            celular: value.celular
        })
    }

    render() {
        if (this.state.isActive){
            return (
                <div>
                    <FormInit onFormInit={this.changeState}/>
                </div>
            );
        }
        else {
            return(
                <div>
                    <SpanTable nombre={this.state.nombre} apellidoPat={this.state.apellidoPat} apellidoMat={this.state.apellidoMat} celular={this.state.celular}/>
                </div>
            );
        }
    }
}

export default Calculo;
