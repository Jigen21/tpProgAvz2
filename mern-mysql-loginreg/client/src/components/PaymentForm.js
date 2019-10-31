import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default function PaymentForm(props) {

    //console.log(props);

    const[nombreTarjeta,setNombreTarjeta]=useState();
    const[numeroTarjeta,setNumeroTarjeta]=useState();
    const[fechaExpiracion,setFechaExpiracion]=useState();
    const[ultimosTresDigitos,setUltimosTresDigitos]=useState();


    const pruebita = () =>
    {

      props.props.nombreTarjeta=nombreTarjeta;
      props.props.numeroTarjeta=numeroTarjeta;
      props.props.fechaExpiracion=fechaExpiracion;
      props.props.ultimosTresDigitos=ultimosTresDigitos;

    }

    
  



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Nombre en tarjeta" defaultValue={props.props.nombreTarjeta} onChange={e => setNombreTarjeta(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Numero de tarjeta" defaultValue={props.props.numeroTarjeta} onChange={e => setNumeroTarjeta(e.target.value)}  fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Fecha de expiracion" defaultValue={props.props.fechaExpiracion} onChange={e => setFechaExpiracion(e.target.value)} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            defaultValue={props.props.ultimosTresDigitos}
            helperText="Ultimos tres digitos"
            onChange={e => setUltimosTresDigitos(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

          <Button color="primary" onClick={()=>pruebita()}>
                    Verificar y Validar
         </Button>
                  



    </React.Fragment>
  );
}