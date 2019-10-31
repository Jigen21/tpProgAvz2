import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {register} from './ProductFunctions'
import {all} from './ProductFunctions'
import {borrar} from './ProductFunctions'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginRight:400,
    backgroundColor:"black"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Correa de perro', 2, 20),
  createData('Bolsa Raza 5 kg', 5, 50),
  createData('Ropa de Cosplay Gato', 100, 200),
  createData('Hueso de juguete para perro', 1, 300),
  createData('Bola de estambre para gato', 0, 10),

  
];




export default function DenseTable() {
  const classes = useStyles();

  const [productoNombre, setProductoNombre] = React.useState("");
  const [productoDescripcion, setProductoDescripcion] = React.useState("");
  const [productoPrecio, setProductoPrecio] = React.useState("");
  const [productoStock, setProductoStock] = React.useState("");
  const [productoImagen, setProductoImagen] = React.useState("");
  const [productoCategoria, setProductoCategoria] = React.useState("");
  const [productoMarca, setProductoMarca] = React.useState("");
  const [productoNumeroReposicion, setProductoNumeroReposicion] = React.useState("");


  const [open, setOpen] = React.useState(false);

  const Borrar = (id) => 
  {

    //alert("ASDASD");
    debugger;
    borrar(id).then(res => {
      if(res)
      {
       
       alert(res);
      }
      else
      {
        alert(res);
      }
    });


  }



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    const producto = {
      nombre: productoNombre,
      descripcion: productoDescripcion,
      precio:productoPrecio,
      stock:productoStock,
      num_reposicion:productoNumeroReposicion,
      imagen:productoImagen,
      id_categoria:productoCategoria,
      id_marca:productoMarca,
      }

     // alert(productoNombre);

      register(producto).then(res => {
        if(res)
        {
         
         setOpen(false);
        }
      });

    
  };

  const cerrarDialog = () => {
    setOpen(false);
  }



  const[cards,addItem] = useState([{}]);

  useEffect(() => {
      const traerItems = async () => {
        const res = await all();
        addItem(res);
      }
      traerItems();
      //console.log(cards);   
  },[]);

  return (

    <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
            fullWidth
            onChange={e => setProductoNombre(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="descripcion"
            label="Descripcion"
            type="email"
            fullWidth
            onChange={e => setProductoDescripcion(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="precio"
            label="Precio"
            type="email"
            fullWidth
            onChange={e => setProductoPrecio(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="stock"
            label="Stock"
            type="email"
            fullWidth
            onChange={e => setProductoStock(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="numero reposicion"
            label="Numero reposicion"
            type="email"
            fullWidth
            onChange={e => setProductoNumeroReposicion(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="imagen"
            label="Imagen"
            type="email"
            fullWidth
            onChange={e => setProductoImagen(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="idCategoria"
            label="IdCategoria"
            type="email"
            fullWidth
            onChange={e => setProductoCategoria(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="idMarca"
            label="IdMarca"
            type="email"
            fullWidth
            onChange={e => setProductoMarca(e.target.value)}
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={cerrarDialog} color="primary">
            Cerrar
          </Button>
          <Button onClick={handleClose} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>


    


    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Producto Nombre</TableCell>
              <TableCell align="right">Stock Actual</TableCell>
              <TableCell align="right">Stock Maximo</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map(card => (
              <TableRow key={card.nombre}>
                <TableCell component="th" scope="row">
                  {card.nombre}
                </TableCell>
                <TableCell align="right">{card.stock}</TableCell>
                <TableCell align="right">{card.stockMaximo}</TableCell>
                <TableCell align="right">

                    <Button variant="outlined" color="secondary" onClick={()=>Borrar(card.idProducto)}>
                        Borrar

                  </Button>
                
                
                
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              AGREGAR

        </Button>
        </Table>

        
      </Paper>
    </div>

    </div>
  );
}