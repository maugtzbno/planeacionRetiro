import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';

function Inicio()
{
    return (
        <div>
        <Typography variant="subtitle1" gutterBottom>
      {/* <p > The Best Place to Invest </p> */}
      
      </Typography>
      
       <React.Fragment>
        <CssBaseline />
        <Container maxWidth="l" >
          {/* <Typography component="div" style={{
          opacity: 0.70, backgroundColor: '#DEC3BE', height: '80vh' , }} /> */}
            <img src={'../images/finance5.jpg'} alt={'Hey'}
            style={{  
                // backgroundImage: 
                position: "center",
                height: '80vh' , }} />
                <p > Tu asesor financiero digital para el retiro </p>
           
        </Container>
      </React.Fragment>
      </div>
    );
  }

export default Inicio;