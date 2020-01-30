import React, { Component } from "react";
import Graph from "../Components/Graph"
import API from "../utils"

class Retiro extends Component {

    render(){
        return(
            <div className="container">
                <div>
                    <p>Aqui podemos observar como un incremento de 1% en la tasa de inversion hace la diferencia entre un retiro sano y uno dependiente.</p>
                    <p>Los siguientes datos se tomaron para simular el escenario:</p>
                    <ul>
                        <li>Edad Actual          : 30</li>
                        <li>Edad de Retiro       : 65</li>
                        <li>Esperanza de Vida    : 85</li>
                        <li>Saldo de sus Ahorros : 50,000</li>
                        <li>No tiene Afore</li>
                        <li>Ingreso Mensual Bruto: 100,000</li>
                        <li>Tasa de Retencion    : 30%</li>
                        <li>Gasto Mensual        : 60,000</li>
                    </ul>
                </div>
                <br></br>
                <Graph/>
            </div>
        )

    }
}

export default Retiro;