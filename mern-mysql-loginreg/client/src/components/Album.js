import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Axios from 'axios';
import {all} from './ProductFunctions'

import {allCategorias} from './CategoriaFunctions'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
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
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },


  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() 
{
  //PARA VER LOS DETALLES DEL PRODUCTO
  const [open, setOpen] = React.useState(false);
  const [nombreDetalle,setNombreDetalle] = React.useState();
  const [imagenDetalle,setImagenDetalle] = React.useState();
  const [descripcionDetalle,setDescripcionDetalle] = React.useState();
  const [idDetalle,setIdDetalle] = React.useState();
  const [precioDetalle,setPrecioDetalle] = React.useState();
  const [stockDetalle,setStockDetalle] = React.useState();



  //PROBANDO PARA CATEGORIAS
  const[categoriasTraidas,setCategoriasTraidas] = useState([{}]);

  useEffect(() => {
      const traerItems = async () => {
        const res = await allCategorias();
        setCategoriasTraidas(res);
        console.log(res);
      }
      traerItems();
      //console.log(cards);   
  },[]);
 



  const[datosUsuario,setDatosUsuario] = useState()
  
  

  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };



  const classes = useStyles();
  const[cards,addItem] = useState([{}]);

  const[filtrado,setDatosFiltrados] = useState([{}])
  

  /*useEffect(() => {
      const fetchItems = async () => {
          const response = await Axios.get("http://localhost:5000/products/all")
          addItem(response.data);
          console.log("refreshed");
      }
      fetchItems();
      console.log(cards);
  },[]);*/
  useEffect(() => {
      const traerItems = async () => {
        const res = await all();
        addItem(res);
        setDatosFiltrados(res);
      }
      traerItems();
      console.log(cards);
       
  },[]);

  useEffect(() => {
    // adding listeners everytime props.x changes
    console.log(datosUsuario); 

  

 }, [datosUsuario])

  const cerrarDialog = () =>
  {
    setOpen(false);
  }

  const mostrarDetalles = (id,nombre,precio,stock,imagen,descripcion) =>
  {
    setNombreDetalle(nombre);
    setImagenDetalle(imagen);
    setDescripcionDetalle(descripcion)

    //para el carrito
    setIdDetalle(id);
    setStockDetalle(stock);
    setPrecioDetalle(precio);
    setOpen(true);
    

  }

  const agregarCarrito = (id,nombre,precio,stock,imagen) => {

      setDatosUsuario(JSON.parse(localStorage.getItem('Usuario')));
      //console.log(e);

      var basket = []
      var newItem = true;
      if(JSON.parse(localStorage.getItem('basket')))
      {

      
          var basket = JSON.parse(localStorage.getItem('basket'));
          basket.forEach(function (item)
          {
              //if(item.product_id == id)
              if(item.idProducto == id)
              {
                  item.quantity += 1;
                  let totalLocal = parseFloat(item.precio);
                  item.precio = totalLocal + precio;
                  //item.precio +=precio;
                  newItem = false;
                  console.log("LLEGUE ACA");
                  localStorage.setItem('basket', JSON.stringify(basket));
              }
          })
      }
      if(newItem) {
          basket.push({
             idProducto: id,
             nombre:nombre,
             precio:precio,
             stock:stock,
             imagen,imagen,
             quantity: 1
          });
          localStorage.setItem('basket', JSON.stringify(basket));
      }

      //PARA PROBAR
      setOpen(false);
       
  }
  
  const filtrarDatos = (e) => {


    //alert("p");

        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];
        
        // If the search bar isn't empty
        if (e.target.value !== "") 
        {
          // Assign the original list to currentList
          currentList = cards;
          
          
          newList = currentList.filter(item => 
            {
  
            const lc = item.nombre.toLowerCase();
   
            const filter = e.target.value.toLowerCase();
            
            return lc.includes(filter);
          });

          console.log(newList);
    
      }
      else {
       
        newList = cards;
      }
     
      setDatosFiltrados(newList);
      
  }

  //useEffect(() => {
  //    setDatosFiltrados(cards);
  //}, [cards])



  const busquedaPrecio = (e) => {
      //alert("p");
      if(e.target.value == "Menor")
      {
        let sortedData = filtrado.slice().sort((a, b) => {
              if(a.precio < b.precio) { return -1; }
              if(a.precio > b.precio) { return 1; }
              return 0;
          });
          setDatosFiltrados(sortedData);
      }
      else
      {
        alert("Mayor");

        let sortedData = filtrado.slice().sort((a, b) => {
          if(a.precio > b.precio) { return -1; }
          if(a.precio < b.precio) { return 1; }
          return 0;
        });
        setDatosFiltrados(sortedData);


      }
  }





  return (
    <React.Fragment>
      <CssBaseline />


      
      <Dialog open={open} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Detalle Producto</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        {nombreDetalle}
                      </DialogContentText>

                      <DialogContentText>
                        {descripcionDetalle}
                      </DialogContentText>

                   

                      <CardMedia
                        className={classes.cardMedia}
                        image={imagenDetalle}
                        title="Image title"
                      />



                    </DialogContent>

                    <DialogActions>
                      <Button onClick={cerrarDialog} color="primary">
                        Cerrar
                      </Button>
                      <Button onClick={()=>agregarCarrito(idDetalle,nombreDetalle,precioDetalle,stockDetalle,imagenDetalle)} color="primary">
                        Agregar al carrito (falta la funcionalidad)
                      </Button>
                  </DialogActions>
                    
      </Dialog>


  
      <main>
        {/* Hero unit */}

        <form className={classes.root} autoComplete="off">
          
            <h4>Busqueda de Texto:</h4>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="age-customized-input">Busqueda de texto</InputLabel>
              <BootstrapInput id="age-customized-input" onChange={filtrarDatos}> </BootstrapInput>
            </FormControl>
         

            
            <h4>Busqueda por Mayor y Menor:</h4>
            <FormControl className={classes.margin}>
              <InputLabel>
                Busqueda por precio
              </InputLabel>
                <Select
                  value={"Busqueda por precio"}
                  onChange={busquedaPrecio}
                  input={<BootstrapInput/>}
                >
                  <MenuItem value={"Menor"}>Menor</MenuItem>
                  <MenuItem value={"Mayor"}>Mayor</MenuItem>
                 
                </Select>
              </FormControl>


              <h4>Busqueda por Categoria:</h4>
              <FormControl className={classes.margin}>
              <InputLabel>
                Busqueda por Categoria
              </InputLabel>
                <Select
                  value={"Busqueda por categoria"}
                  
                  input={<BootstrapInput/>}
                >
                  {categoriasTraidas.map((X) => 
                  {
                return <MenuItem>{X.nombre}</MenuItem>
              })}
                 
                 
                </Select>
              </FormControl>

          
            </form>

              


         
     
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {filtrado.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imagen}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.nombre}
                    </Typography>
                    <Typography>
                      {card.descripcion}
                    </Typography>
                    <Typography>
                      {card.precio}$
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={()=>mostrarDetalles(card.idProducto,card.nombre,card.precio,card.stock,card.imagen,card.descripcion)}>
                      Ver
                    </Button>
                    <Button size="small" color="primary" onClick={()=>agregarCarrito(card.idProducto,card.nombre,card.precio,card.stock,card.imagen)}>
                      Agregar al carrito
                    </Button>
                  </CardActions>
                </Card>

              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </React.Fragment>
  );
}