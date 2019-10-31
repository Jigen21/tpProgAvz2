import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EventNote from '@material-ui/icons/EventNote';
import TablaPedidos from './TablaPedidos';
import TablaOfertas from './TablaOfertas';
import TablaDescuentos from './TablaDescuentos';
import TablaProductos from './TablaProductos';
import TablaProveedores from './TablaProveedores';
import TablaLocalidades from './TablaLocalidades';
import TablaMarcas from './TablaMarcas';
import TablaCategorias from './TablaCategorias';
import TablaEstados from './TablaEstados';
import TablaBancos from './TablaBancos';
import TablaTarjetas from './TablaTarjetas';
import LocalOffer from '@material-ui/icons/LocalOffer';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Stars from '@material-ui/icons/Stars';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StoreIcon from '@material-ui/icons/Store';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    backgroundColor:"transparent",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height:100
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:50
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));



export default function ClippedDrawer() {
  const classes = useStyles();
  //let pedidosActivado = false;
  const [pedidosActivado, setPedidosActivado] = useState(false);
  const [proveedoresActivado,setProveedoresActivado] = useState(false);
  const [productosActivado, setProductosActivado] = useState(false);
  const [descuentosActivado, setDescuentosActivado] = useState(false);
  const [ofertasActivado, setOfertasActivado] = useState(false);
  const [localidadesActivado,setLocalidadesActivado] = useState(false);
  const [marcasActivado,setMarcasActivado] = useState(false)
  const [categoriasActivado,setCategoriasActivado] = useState(false)
  const [estadosActivado,setEstadosActivado] = useState(false)
  const [bancosActivado,setBancosActivado] = useState(false)
  const [tarjetasActivado,setTarjetasActivado] = useState(false)

  const llamar = (i) => 
  {
    setPedidosActivado(false)
    setProveedoresActivado(false)
    setProductosActivado(false)
    setDescuentosActivado(false)
    setOfertasActivado(false)
    setLocalidadesActivado(false)
    setMarcasActivado(false)
    setCategoriasActivado(false)
    setEstadosActivado(false)
    setBancosActivado(false)
    setTarjetasActivado(false)
    //alert("asdasd");
    i == 0 ? setPedidosActivado(true) :
    i == 1 ? setProveedoresActivado(true) : 
    i == 2 ? setProductosActivado(true) : 
    i == 3 ? setDescuentosActivado(true): 
    i == 4 ? setOfertasActivado(true):
    i == 5 ? setLocalidadesActivado(true):
    i == 6 ? setMarcasActivado(true):
    i == 7 ? setCategoriasActivado(true):
    i == 8 ? setEstadosActivado(true):
    i == 9 ? setBancosActivado(true):
    i == 10 ? setTarjetasActivado(true):
    window.location.href="http://localhost:3000/loginPosta";
    
    //pedidosActivado=true;
    //setPedidosActivado(true);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar >
          <Typography variant="h4" noWrap>
            Menu Del Administrador
          </Typography>
        </Toolbar>
      </AppBar>


      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Pedidos', 'Proveedores', 'Productos','Descuentos','Ofertas','Localidades','Marcas','Categorias','Estados','Bancos','Tarjetas','Cerrar Sesion'].map((text, index) => (
            <ListItem button key={text} onClick={()=>llamar(index)}>
            
              <ListItemIcon>{index === 0 ? <EventNote /> : 
                             index === 1 ? <StoreIcon /> :
                             index === 2 ? <ShoppingBasketIcon /> :
                             index === 3 ? <Stars/> :
                             index === 4 ? <LocalOffer /> :
                             index === 5 ? <LocalOffer /> :
                             index === 6 ? <LocalOffer /> :
                             index === 7 ? <LocalOffer /> :
                             index === 8 ? <LocalOffer /> :
                             index === 9 ? <LocalOffer /> :
                             index === 10 ? <LocalOffer /> :
                             <ExitToApp />} </ListItemIcon>
              <ListItemText primary={text} />


              

            </ListItem>
          ))}
        </List>
        <Divider />
      
      </Drawer>

      {ofertasActivado  ? <TablaOfertas/> : 
       proveedoresActivado ? <TablaProveedores/> :
       productosActivado ? <TablaProductos/> :
       descuentosActivado ? <TablaDescuentos/> :
       localidadesActivado ? <TablaLocalidades/> :
       marcasActivado ? <TablaMarcas/> :
       categoriasActivado ? <TablaCategorias/> :
       estadosActivado ? <TablaEstados/> :
       bancosActivado ? <TablaBancos/> :
       tarjetasActivado ? <TablaTarjetas/> :
       <TablaPedidos/>}
       
      
     
    </div>
  );
}
