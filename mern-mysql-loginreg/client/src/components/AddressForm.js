import React,{useEffect,useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {all} from './LocalidadesFunctions'
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

export default function AddressForm(props) {
  

    //PROBANDO TRAER LAS LOCALIDADES
    const [localidades,setLocalidades] = React.useState([]);

    useEffect(() => {
      const traerLocalidades = async () => {
        const res = await all();
        setLocalidades(res);
        console.log(res);
       
      }
      traerLocalidades();
      //console.log(localidades);
      
  },[]);

    //alert(props.algo);
    //console.log(props);
    
    const[nombre,setNombre]=useState();
    const[segundoNombre,setSegundoNombre]=useState();
    const[domicilio,setDomicilio]=useState();
    const[codigoPostal,setCodigoPostal]=useState();
    const[barrio,setBarrio]=useState();
    


    /*props.props.primerNombre=nombre;
    props.props.segundoNombre=segundoNombre;
    props.props.domicilio=domicilio;
    props.props.codigoPostal=codigoPostal;
    props.props.barrio=setBarrio;*/

    const pruebita = () =>
    {
      alert("asd");
      props.props.primerNombre=nombre;
      props.props.segundoNombre=segundoNombre;
      props.props.domicilio=domicilio;
      props.props.codigoPostal=codigoPostal;
      props.props.barrio=setBarrio;

    }
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos de envio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Primer Nombre"
            fullWidth
            autoComplete="fname"
            defaultValue={props.props.primerNombre}
            onChange={e => setNombre(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Segundo Nombre"
            fullWidth
            autoComplete="lname"
            defaultValue={props.props.segundoNombre}
            onChange={e => setSegundoNombre(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Domicilio"
            fullWidth
            autoComplete="billing address-line1"
            defaultValue={props.props.domicilio}
            onChange={e => setDomicilio(e.target.value)}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Codigo postal"
            fullWidth
            autoComplete="billing postal-code"
            defaultValue={props.props.codigoPostal}
            onChange={e => setCodigoPostal(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Barrio"
            fullWidth
            autoComplete="billing country"
            defaultValue={props.props.barrio}
            onChange={e => setBarrio(e.target.value)}
          />
        </Grid>

          <Grid item xs={12} sm={6}>

          <Select name={"asd"} fullWidth>
                {localidades.map(fbb =>
                  <option key={fbb.key} value={fbb.key}>{fbb.nombre}</option>
                )};

                
              </Select>
        </Grid>



      </Grid>
                  <Button color="primary" onClick={()=>pruebita()}>
                    Verificar y Validar
                  </Button>
                  

    </React.Fragment>
  );
}