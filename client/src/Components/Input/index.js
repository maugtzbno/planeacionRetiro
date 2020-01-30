import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import API from '../../utils'

class Inputs extends React.Component {
  classes = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: "5px",
    }
  }

  handleClick = event => {
    event.preventDefault();
    API.sendCont(this.state);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    this.setState({
      [name]: value

    },x=>console.log(this.state))
  }
  render(){
  return (
    <div className={this.classes.container}>
      <br></br>
      <form onSubmit={this.handleClick}>
      <Input
        placeholder="Nombre"
        name="nombre"
        onChange={this.handleInputChange}
        className={this.classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="Correo Electronico"
        name="correo"
        onChange={this.handleInputChange}
        className={this.classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="Número de Celular"
        name="celular"
        onChange={this.handleInputChange}
        className={this.classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Button variant="contained" color="primary" className={this.classes.button} type="submit">
        Quiero ser contactado
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={this.classes.rightIcon}>send</Icon>
      </Button>
      </form>
    </div>
    
  )};
}

export default Inputs;