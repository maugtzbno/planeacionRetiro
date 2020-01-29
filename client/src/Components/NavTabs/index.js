import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green, purple, lightBlue, lightGreen, red, blueGrey } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 30,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);
const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: lightBlue[400],
    '&:hover': {
      backgroundColor: blueGrey[300],
      opasity: 0.50
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
    container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  }
    
  },
}));


// This resolves to nothing and doesn't affect browser history
const Inicio = "/";
const Calculo = "/Calculo"
const Retiro = "/Retiro"
const Inversion = "/Inversion"




export default function Links() {
  const classes = useStyles();

  return (
    
    <div>
      <Typography variant="subtitle1" gutterBottom
      style={{  
        backgroundColor: "#white",
        '&:hover': {
          backgroundColor: "#white",
          opasity:  1
        }} }
      >
        
      <h1 > Planeación Financiera para el Retiro </h1>
      <br></br>
      {/* <h3> FinManager</h3> */}
      </Typography>
      
      <Grid container spacing={3}
      style={{  
        backgroundColor: "#1441BC",
        opasity: 0.5
      }}>
        <Grid item xs={3}>
        <ColorButton variant="contained" color="primary" className={classes.margin}
        Link href={Inicio} className={classes.link}>
        Inicio
        </ColorButton>
        </Grid>

        <Grid item xs={3}>
        <ColorButton variant="contained" color="primary" className={classes.margin}
        Link href={Calculo}   className={classes.link}>
        Calculo
        </ColorButton>
        </Grid>
      
        <Grid item xs={3}>
        <ColorButton variant="contained" color="primary" className={classes.margin}
        Link href={Retiro} className={classes.link}>
        Planeación Retiro
        </ColorButton>
        </Grid>

        <Grid item xs={3}>
        <ColorButton variant="contained" color="primary" className={classes.margin}
        Link href={Inversion} className={classes.link}>
        Inversion
      </ColorButton>
       
        </Grid>
      </Grid>
    </div>
  );
}