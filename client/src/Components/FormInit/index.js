import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import API from "../../utils"

class Inputs extends React.Component {
  classes = {
    root: {
          '& .MuiTextField-root': {
            margin: "5px",
            width: 200,
          }}
  }

  aforeEst = [
    {
      value: 1,
      label: "Si"
    },
    {
      value: 0,
      label: "No"
    },
  ]

  //Setting the component's initial state
  state = {
    afore: ""
};

  handleChange = event => {
    const {name, value} = event.target;
    console.log(event.target);
    this.setState({
      afore: value
    },x=>console.log(this.state))
  }

  handleClick = event => {
    event.preventDefault();
    API.sendData(this.state);
    this.props.onFormInit(this.state)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    this.setState({
      [name]: value
    },x=>console.log(this.state))
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleClick}>
        <TextField id="prueba"
          required
          name="nombre"
          label="Required"
          helperText="Nombre"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          required
          name="apellidoPat"
          label="Required"
          helperText="Apellido Paterno"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          required
          name="apellidoMat"
          label="Required"
          helperText="Apellido Materno"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          required
          name="ciudad"
          label="Required"
          helperText="Ciudad"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          required
          name="celular"
          label="Required"
          type="number"
          helperText="Numero celular"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <br></br>
        <br></br>
        <TextField
          required
          name="edadActual"
          label="Required"
          type="number"
          helperText="Edad Actual"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          required
          name="edadRetiro"
          label="Required"
          type="number"
          helperText="Edad de Retiro"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          required
          name="edadEsperanza"
          label="Required"
          type="number"
          helperText="Esperanza de Vida"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <br></br>
        <TextField
          required
          name="ingresoMensualBruto"
          label="Required"
          type="number"
          helperText="Ingreso Mensual Bruto"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          required
          name="tasaRetencion"
          label="Required"
          type="float"
          helperText="Tasa de Retencion"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          required
          name="gastoMensual"
          label="Required"
          type="number"
          helperText="Gasto Mensual"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <br></br>
        <br></br>
        <TextField
          required
          name="saldoActual"
          label="Required"
          type="number"
          helperText="Ahorros personales"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <TextField
          select
          label="Required"
          name="afore"
          value={this.state.afore}
          onChange={this.handleChange}
          helperText="¿Cuentas con Afore?"
        >
          {this.aforeEst.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          name="aforeSaldo"
          label="Required"
          type="number"
          helperText="Saldo en tu Afore"
          onChange={this.handleInputChange}
          inputProps={{'aria-label':'description',}}
        />
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" className={this.classes.button} type="submit">
        Enviar
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={this.classes.rightIcon}>send</Icon>
      </Button>
        </form>
      </div>
    )
  }
}

export default Inputs;