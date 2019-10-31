import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {allCategorias} from './CategoriaFunctions';

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

  const[categoriasTraidas,setCategoriasTraidas] = useState([{}]);

  useEffect(() => {
      const traerItems = async () => {
        const res = await allCategorias();
        setCategoriasTraidas(res);
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
              <TableCell>Id Categoria</TableCell>
              <TableCell align="right">Nombre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoriasTraidas.map(row => (
              <TableRow key={row.idCategoria}>
                <TableCell component="th" scope="row">
                  {row.idCategoria}
                </TableCell>
                <TableCell align="right">{row.nombre}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}