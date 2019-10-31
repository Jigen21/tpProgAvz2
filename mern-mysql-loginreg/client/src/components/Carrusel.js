import React,{useState,useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {all} from './ProductFunctions'
import './Carrusel.css'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export default function Carrusel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);


  //PARA MOSTRAR LOS DETALLES DEL CARRUSEL
  const [open, setOpen] = React.useState(false);
  const [nombreDetalle,setNombreDetalle] = React.useState();
  const [imagenDetalle,setImagenDetalle] = React.useState();

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

  

  const classes = useStyles();

  const cerrarDialog = () =>
  {
    setOpen(false);
  }

  const mostrarDetalles = (nombre,imagen) =>
  {
    setNombreDetalle(nombre);
    setImagenDetalle(imagen);
    setOpen(true);
    

  }
  //////////////////////////////////////////////////////

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const[cards,addItem] = useState([{}]);

      useEffect(() => {
        const traerItems = async () => {
          const res = await all();
          addItem(res);
        }
        traerItems();
        console.log(cards);   
    },[]);



  return (

    <div>

    <Dialog open={open} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Agregar Producto</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Para agregar un producto con exito,debe ingresar todos los datos del formulario
                      </DialogContentText>

                      <TextField
                        autoFocus
                        margin="dense"
                        id="nombre"
                        label="Nombre"
                        type="email"
                        value={nombreDetalle}
                        fullWidth
                      />

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
                      <Button color="primary">
                        Agregar al carrito (falta la funcionalidad)
                      </Button>
                  </DialogActions>
                    
      </Dialog>









    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
     {cards.map(card => (
      <Carousel.Item onClick={()=>mostrarDetalles(card.nombre,card.imagen)}>
        <img
          className="d-block w-100"
          src={card.imagen}
          alt= {card.nombre}
        />
        <Carousel.Caption>
          <h3>{card.nombre}</h3>
          <p>{card.descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>

      ))}
    </Carousel>

    </div>
  );
}

