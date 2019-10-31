import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {all} from './DescuentoFunctions';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {agregarDescuento} from './DescuentoFunctions';
import {borrar} from './DescuentoFunctions';

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
  createData('DESCUENTOS', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  
];

export default function DenseTable() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [codigoDescuento,setCodigoDescuento]=React.useState("");
  const [porcentajeDescuento,setPorcentajeDescuento]=React.useState("");
  const [fechaInicio,setFechaInicio]=React.useState("");
  const [fechaFin,setFechaFin]=React.useState("");



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

  const cerrarDialog = () => {
    setOpen(false);
  }


  const handleClose = () => {

    alert("asdads");
    //  setOpen(false);
   const descuento = {
       codigoDescuento: codigoDescuento,
       porcentajeDescuento: porcentajeDescuento,
       fechaInicio:fechaInicio,
       fechaFin:fechaFin
       }
 
       // alert(productoNombre);
       //ARREGLAR ESTA PARTE DE PROVEEDOR
       agregarDescuento(descuento).then(res => {
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


  
  const[descuentosTraidos,setDescuentosTraidos] = useState([{}]);

      useEffect(() => {
        const traerItems = async () => {
          const res = await all();
          setDescuentosTraidos(res);
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
            label="Codigo Descuento"
            type="email"
            fullWidth
            onChange={e => setCodigoDescuento(e.target.value)}
          
          />

          <TextField
            autoFocus
            margin="dense"
            id="descripcion"
            label="Porcentaje Descuento"
            type="email"
            fullWidth
            onChange={e => setPorcentajeDescuento(e.target.value)}
          
          />
          <TextField
            autoFocus
            margin="dense"
            id="precio"
            label="Fecha Inicio"
            type="email"
            fullWidth
            onChange={e => setFechaInicio(e.target.value)}
          
          />

          <TextField
            autoFocus
            margin="dense"
            id="precio"
            label="Fecha Fin"
            type="email"
            fullWidth
            onChange={e => setFechaFin(e.target.value)}
          
          />
        


        </DialogContent>
        <DialogActions>

        <Button onClick={handleClose} color="primary">
            Agregar
          </Button>


          <Button onClick={cerrarDialog} color="primary">
            Cerrar
          </Button>
         
        </DialogActions>
      </Dialog>









    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id Descuento</TableCell>
              <TableCell align="right">Codigo Descuento</TableCell>
              <TableCell align="right">Porcentaje Descuento</TableCell>
              <TableCell align="right">Fecha Inicio</TableCell>
              <TableCell align="right">Fecha Fin</TableCell>
              <TableCell align="right">Acciones</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {descuentosTraidos.map(row => (
              <TableRow key={row.idDescuento}>
                <TableCell component="th" scope="row">
                  {row.idDescuento}
                </TableCell>
                <TableCell align="right">{row.codigoDescuento}</TableCell>
                <TableCell align="right">{row.porcentajeDescuento}</TableCell>
                <TableCell align="right">{row.fechaInicio}</TableCell>
                <TableCell align="right">{row.fechaFin}</TableCell>

                <TableCell align="right">


                      <Button variant="outlined" color="secondary" onClick={()=>Borrar(row.idDescuento)}>
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