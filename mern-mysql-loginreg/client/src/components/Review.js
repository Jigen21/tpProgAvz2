import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  //alert(props.props.nombreTarjeta);

  let addresses = [
    props.props.primerNombre,
    props.props.segundoNombre,
    props.props.domicilio,
    props.props.codigoPostal,
    props.props.barrio
    ];

  let payments = [
    { name: 'Card type', detail: props.props.nombreTarjeta },
    { name: 'Card holder', detail: props.props.numeroTarjeta },
    { name: 'Card number', detail: props.props.ultimosTresDigitos },
    { name: 'Expiry date', detail: props.props.fechaExpiracion },
  ];

  let products = JSON.parse(localStorage.getItem('basket'))
  let sumaTotal = products.reduce((sumaTotal, producto) => sumaTotal + producto.precio, 0);
  console.log(sumaTotal);



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Revisa tu orden
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.nombre}>
            <ListItemText primary={product.nombre} secondary={product.quantity} />
            <Typography variant="body2">{product.precio}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {sumaTotal}$
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Envio
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Metodo de pago
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}