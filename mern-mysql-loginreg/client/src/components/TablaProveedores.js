import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {all,agregarProveedor,borrar} from './ProveedoresFunctions';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//import {agregarProveedor} './ProveedoresFunctions';

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
  createData('Sabrositos', "Correa de juguete"),
  createData('Royal Canin', "Bolsa 5 kg"),
  createData('Eukanuba', "Bolsa 10 kg"),
  createData('Whiskas', "????"),
  createData('Raza', "Producto generico"),
  createData('Purina', "DogChow"),


  
];

export default function DenseTable() {






  const classes = useStyles();

  const[proveedoresTraidos,setProveedoresTraidos] = useState([{}]);


  const [open, setOpen] = React.useState(false);
  const [nombre,setNombre] = React.useState("");
  const [telefono,setTelefono] = React.useState("");
  const [email,setEmail] = React.useState("");


  const Borrar = (id) => 
  {
    console.log(id);
    alert(id);
    debugger;
    borrar(id).then(res => {
      if(res)
      {
       alert("asdasd");
       //alert(res);
      }
      else
      {
        alert("ddd");
        //alert(res);
      }
    });


  }


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {


         
       //  setOpen(false);
      const proveedor = {
          nombre: nombre,
          email: email,
          telefono:telefono,
        
          }
    
         // alert(productoNombre);
          //ARREGLAR ESTA PARTE DE PROVEEDOR
          agregarProveedor(proveedor).then(res => {
            if(res)
            {
             debugger;
             setOpen(false);
            }
            else
            {
              setOpen(false);
            }
          });
      

    
  };

  const cerrarDialog = () => {
    setOpen(false);
  }





      useEffect(() => {
        const traerItems = async () => {
          const res = await all();
          setProveedoresTraidos(res);
        }
        traerItems();
        //console.log(cards);   
    },[]);



  return (


    <div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar Proveedor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar un Proveedor con exito,debe ingresar todos los datos del formulario
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="nombre"
            label="Nombre"
            type="email"
            fullWidth
            onChange={e => setNombre(e.target.value)}
          
          />

          <TextField
            autoFocus
            margin="dense"
            id="descripcion"
            label="Email"
            type="email"
            fullWidth
            onChange={e => setEmail(e.target.value)}
          
          />
          <TextField
            autoFocus
            margin="dense"
            id="precio"
            label="Telefono"
            type="email"
            fullWidth
            onChange={e => setTelefono(e.target.value)}
          
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
              <TableCell>Id Proveedor</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Telefono</TableCell>
              <TableCell align="right">Acciones</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {proveedoresTraidos.map(row => (
              <TableRow key={row.idProveedor}>
                <TableCell component="th" scope="row">
                  {row.idProveedor}
                </TableCell>
                <TableCell align="right">{row.nombre}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.telefono}</TableCell>

                <TableCell align="right">


                       <Button variant="outlined" color="secondary" onClick={()=>Borrar(row.idProveedor)}>
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