import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {all} from './MarcasFunctions';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
  createData('OFERTAS', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),

  
];

export default function DenseTable() {
  const classes = useStyles();

  const[marcasTraidas,setMarcasTraidas] = useState([{}]);



  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {


         
         setOpen(false);
      

    
  };

  const cerrarDialog = () => {
    setOpen(false);
  }






  useEffect(() => {
      const traerItems = async () => {
        const res = await all();
        setMarcasTraidas(res);
      }
      traerItems();
      //console.log(cards);   
  },[]);

  return (


    <div>


    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Agregar Localidad</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Para agregar una Localidad con exito,debe ingresar todos los datos del formulario
        </DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="nombre"
          label="Nombre"
          type="email"
          fullWidth
        
        />

        <TextField
          autoFocus
          margin="dense"
          id="descripcion"
          label="Costo Envio"
          type="email"
          fullWidth
        
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
              <TableCell>Id Marca</TableCell>
              <TableCell align="right">Nombre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {marcasTraidas.map(row => (
              <TableRow key={row.idMarca}>
                <TableCell component="th" scope="row">
                  {row.idMarca}
                </TableCell>
                <TableCell align="right">{row.nombre}</TableCell>
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