import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {all} from './TarjetaFunctions';

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

  const[tarjetasTraidas,setTarjetasTraidas] = useState([{}]);

  useEffect(() => {
      const traerItems = async () => {
        const res = await all();
        setTarjetasTraidas(res);
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
              <TableCell>Id Tarjeta</TableCell>
              <TableCell align="right">Descripcion</TableCell>
              <TableCell align="right">Id Banco</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tarjetasTraidas.map(row => (
              <TableRow key={row.idTarjeta}>
                <TableCell component="th" scope="row">
                  {row.idTarjeta}
                </TableCell>
                <TableCell align="right">{row.descripcion}</TableCell>
                <TableCell align="right">{row.idBanco}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}