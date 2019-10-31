import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import {guardarPedido} from './PedidoFunctions'

import {all} from './LocalidadesFunctions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];
const dataUsuario={
  primerNombre:"",
  segundoNombre:"",
  domicilio:"",
  codigoPostal:"",
  barrio:"",
  nombreTarjeta:"",
  numeroTarjeta:"",
  fechaExpiracion:"",
  ultimosTresDigitos:""

};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm props={dataUsuario}/>;
    case 1:
      //console.log(dataUsuario)
      return <PaymentForm props={dataUsuario}/>;
    case 2:
      console.log(dataUsuario)
      return <Review props={dataUsuario}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {

  






  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => 
  {
    setActiveStep(activeStep + 1);

    //ACA REALIZAR LA COMPRA EN LA BASE DE DATOS
    if(activeStep==2)
    {
      alert("Gracias por su compra");

      var datosUsuario = JSON.parse(localStorage.getItem('Usuario'));
      var idUsuarioComprando = datosUsuario.idUsuario;
      debugger;

      const pedido = {
       /* fecha: "asdsad",
        importe_total: 2,
        envio:"asd",
        id_localidad:3,
        id_medioDePago:2,
        id_cliente:1,
        id_estado:5,
        id_descuento:6,*/
        fecha:"asd",
        importeTotal:30,
        envio:true,
        direccion:"asd",
        codigoPostal:2312,
        idLocalidad:1,
        //idCliente:3,
        idCliente:idUsuarioComprando,
        idEstado:4,
        idDescuento:5,
        importeDescuento:2
        }
  
       // alert(productoNombre);
  
        guardarPedido(pedido).then(res => {
          if(res)
          {
           
           //setOpen(false);
           alert("pedido guardardo");
           //localStorage.clear("basket");
           localStorage.removeItem("basket");
          }
        });



    }
  };

  const handleBack = () => 
  {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Pagar
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Volver
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Realizar compra' : 'Siguiente'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      
      </main>
    </React.Fragment>
  );
}