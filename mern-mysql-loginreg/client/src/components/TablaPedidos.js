import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {all} from './PedidoFunctions'

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
  createData('0', "Franco032", 588,"Entregado" ),
  createData('1', "Usuario12", 200,"En Envio" ),
  createData('2', "Usuario5", 5000,"Devuelto" ),
  createData('3', "Axel", 100,"Comprado" ),
  createData('4', "Hector", 232,"Cancelado" ),
  createData('5', "Anonimo321", 499,"Entregado" ),
  createData('6', "AmanteDeAnimalitos77", 50,"Entregado" ),  
];

export default function DenseTable() {
  const classes = useStyles();

  const[pedidosTraidos,setPedidosTraidos] = useState([{}]);

    useEffect(() => {
      const traerItems = async () => {
        const res = await all();
        setPedidosTraidos(res);
      }
      traerItems();
      //console.log(cards);   
  },[]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id Pedido</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Importe total</TableCell>
              <TableCell align="right">Envio</TableCell>
              <TableCell align="right">Direccion</TableCell>
              <TableCell align="right">Codigo Postal</TableCell>
              <TableCell align="right">Id Localidad</TableCell>
              <TableCell align="right">Id Cliente</TableCell>
              <TableCell align="right">Id Estado</TableCell>
              <TableCell align="right">Id Descuento</TableCell>
              <TableCell align="right">Importe Descuento</TableCell>
              

            </TableRow>
          </TableHead>
          <TableBody>
            {pedidosTraidos.map(row => (
              <TableRow key={row.idPedido}>
                <TableCell component="th" scope="row">
                  {row.idPedido}
                </TableCell>
                <TableCell align="right">{row.fecha}</TableCell>
                <TableCell align="right">{row.importeTotal}</TableCell>
                <TableCell align="right">{row.envio}</TableCell>
                <TableCell align="right">{row.direccion}</TableCell>
                <TableCell align="right">{row.codigoPostal}</TableCell>
                <TableCell align="right">{row.idLocalidad}</TableCell>
                <TableCell align="right">{row.idCliente}</TableCell>
                <TableCell align="right">{row.idEstado}</TableCell>
                <TableCell align="right">{row.idDescuento}</TableCell>
                <TableCell align="right">{row.importeDescuento}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}