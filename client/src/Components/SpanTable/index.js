import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from "../../utils"

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class SpanningTable extends React.Component {
    classes = {
        table: {
            minWidth: 700,
        }
    };

    currSty(num) {
        return (new Intl.NumberFormat('en-GB').format(num))
    }

    state= {
        nombre: this.props.nombre,
        apellidoPat: this.props.apellidoPat,
        apellidoMat: this.props.apellidoMat,
        ciudad: "",
        celular: this.props.celular,
        edadActual: "",
        edadRetiro: "",
        tiempoAnosAhorro: "",
        tiempoMesesAhorro: "",
        edadEsperanza: "",
        tiempoAnosRetiro: "",
        tiempoMesesRetiro: "",
        ingresoMensualBruto: "",
        tasaRetencion: "",
        ingresoMensualNeto: "",
        gastoMensual: "",
        ahorroMensualActual: "",
        saldoActual: "",
        afore: "",
        aforeSaldo: "",
        tasaRealAhorro: "",
        pronosticoAhorro: "",
        tasaRealRetiro: "",
        pronosticoHerencia: "",
        objetivoHerencia: "",
        objetivoAhorro: "",
        objetivoAhorroMensual: "",
        objetivoGastoMensual: ""
    }

    componentDidMount = () => {
        console.log("dentro de did mount")
        console.log(this.state)
        API.getData(this.state)
            .then(x=>{
                console.log("Despues de API get Data")
                console.log(x)
                this.setState({
                    nombre: x.data[0].nombre,
                    apellidoPat: x.data[0].apellidoPat,
                    apellidoMat: x.data[0].apellidoMat,
                    ciudad: x.data[0].ciudad,
                    celular: x.data[0].celular,
                    edadActual: x.data[0].edadActual,
                    edadRetiro: x.data[0].edadRetiro,
                    tiempoAnosAhorro: x.data[0].tiempoAnosAhorro,
                    tiempoMesesAhorro: x.data[0].tiempoMesesAhorro,
                    edadEsperanza: x.data[0].edadEsperanza,
                    tiempoAnosRetiro: x.data[0].tiempoAnosRetiro,
                    tiempoMesesRetiro: x.data[0].tiempoMesesRetiro,
                    ingresoMensualBruto: x.data[0].ingresoMensualBruto,
                    tasaRetencion: x.data[0].tasaRetencion,
                    ingresoMensualNeto: x.data[0].ingresoMensualNeto,
                    gastoMensual: x.data[0].gastoMensual,
                    ahorroMensualActual: x.data[0].ahorroMensualActual,
                    saldoActual: x.data[0].saldoActual,
                    afore: x.data[0].afore,
                    aforeSaldo: x.data[0].aforeSaldo,
                    tasaRealAhorro: x.data[0].tasaRealAhorro,
                    pronosticoAhorro: x.data[0].pronosticoAhorro,
                    tasaRealRetiro: x.data[0].tasaRealRetiro,
                    pronosticoHerencia: x.data[0].pronosticoHerencia,
                    objetivoHerencia: x.data[0].objetivoHerencia,
                    objetivoAhorro: x.data[0].objetivoAhorro,
                    objetivoAhorroMensual: x.data[0].objetivoAhorroMensual,
                    objetivoGastoMensual: x.data[0].objetivoGastoMensual
                },x=>console.log(this.state))
            });
    }

    render(){
        var msg = ""
        var dts = ""
        if (this.state.ahorroMensualActual>this.state.objetivoAhorroMensual){
            msg = "Enhorabuena tu ahorra mensual es mayor al necesario para mantener el gasto actual durante tu retiro"
            dts = "El monto pronosticado con el que contaras para tu retiro es de " + this.currSty(this.state.pronosticoAhorro) +" y de mantener el gasto actual tus hijos estarian contando con una herencia de " + this.currSty(this.state.pronosticoHerencia)
        }
        else{
            msg = "Desafortunadament tu ahorra mensual es menor al necesario para mantener el gasto actual durante tu retiro"
            dts = "El monto pronosticado con el que contaras para tu retiro es de " + this.currSty(this.state.pronosticoAhorro) +" por lo que tendrias que reducir tu gasto mensual al siguiente monto " + this.currSty(this.state.objetivoGastoMensual)
        }
        return(
            <div>
            <div>
                <p>A continuacion se presentan las concluciones de tus resultados:</p>
                <p>{msg}</p>
                <p>{dts}</p>
            </div>
            <br></br>
            <TableContainer component={Paper}>
                <Table className={this.classes.table} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={1}></TableCell>
                            <TableCell align="center" colSpan={2}>Periodo de Ahorro</TableCell>
                            <TableCell align="center" colSpan={2}>Periodo de Retiro</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Escenario</TableCell>
                            <TableCell align="center">Ahorro Mensual</TableCell>
                            <TableCell align="center">Monto Final</TableCell>
                            <TableCell align="center">Gasto Mensual</TableCell>
                            <TableCell align="center">Monto Final</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">Actual</TableCell>
                            <TableCell align="center">{this.currSty(this.state.ahorroMensualActual)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.pronosticoAhorro)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.gastoMensual)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.pronosticoHerencia)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Ideal</TableCell>
                            <TableCell align="center">{this.currSty(this.state.objetivoAhorroMensual)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.objetivoAhorro)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.objetivoGastoMensual)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.objetivoHerencia)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Diferencia</TableCell>
                            <TableCell align="center">{this.currSty(this.state.ahorroMensualActual-this.state.objetivoAhorroMensual)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.pronosticoAhorro-this.state.objetivoAhorro)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.gastoMensual-this.state.objetivoGastoMensual)}</TableCell>
                            <TableCell align="center">{this.currSty(this.state.pronosticoHerencia-this.state.objetivoHerencia)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        )
    }
}

export default SpanningTable;