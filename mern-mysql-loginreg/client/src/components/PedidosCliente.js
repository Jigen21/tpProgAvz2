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
import {pedidosCliente} from './PedidoFunctions'

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



export default function DenseTable() {
  const classes = useStyles();

  const[pedidos,setPedidos] = useState([{}]);

  useEffect(() => {

      let datos = JSON.parse(localStorage.getItem("Usuario"));
      //Aca cambie
      let id=datos.idUsuario;

      const traerItems = async () => {
        const res = await pedidosCliente(id);
        setPedidos(res);
        console.log(res);
      }
      traerItems();
      //console.log(cards);   
  },[]);



  return (

    <div>

       <div className={classes.root}>
          <Paper className={classes.paper}>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Pedido Id</TableCell>
                  <TableCell align="right">Fecha</TableCell>
                  <TableCell align="right">Importe Total</TableCell>
                  <TableCell align="right">Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pedidos.map(card => (
                  <TableRow key={card.id_pedido}>
                    <TableCell component="th" scope="row">
                      {card.idPedido}
                    </TableCell>
                    <TableCell align="right">{card.fecha}</TableCell>
                    <TableCell align="right">{card.importeTotal}</TableCell>
                    <TableCell align="right">{card.idEstado}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

           
            </Table>

            
          </Paper>
        </div>



      
    
    </div>
  );
}