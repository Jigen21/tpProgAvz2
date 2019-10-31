import React,{useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox,Person,Store,AccountCircle,ShoppingCart } from '@material-ui/icons'
import {Link,withRouter} from 'react-router-dom'
import './NavBarPosta.css';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

const prueba = () => 
{
    //alert("asdasd");
    localStorage.clear();
    window.location.href="http://localhost:3000/blog";
}

const useStyles = makeStyles(theme => ({
    root: {
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
    iconHover: {
      '&:hover': {
        color: red[800],
      },
    },
  }));
  
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

function NavBar(props) {

   // let Usuario = {usuario:"jorgito",rol:"cliente",carrito:{productoUno:"asd"}}
   // localStorage.setItem('Usuario',JSON.stringify(Usuario))
   //let banderaDatos = true;
   const[banderaDatos,setBandera] = useState(false);

   console.log(banderaDatos);

   



    return (
        <List component="nav">
            <ListItem component="div" >

                <ListItemText inset>
                    <TypoGraphy  variant="title">
                        <Link to="/blog" className="nav-link">

                            <HomeIcon
                                color="primary"
                                fontSize="large"
                                component={svgProps => {
                                return (
                                    <svg {...svgProps}>
                                    <defs>
                                        <linearGradient id="gradient1">
                                        <stop offset="30%" stopColor={blue[400]} />
                                        <stop offset="70%" stopColor={red[400]} />
                                        </linearGradient>
                                    </defs>
                                    {React.cloneElement(svgProps.children[0], {
                                        fill: 'url(#gradient1)',
                                    })}
                                    </svg>
                                );
                                }}
                            />   Pagina Principal





                        </Link>  
                    </TypoGraphy>
                </ListItemText>

                
                <ListItemText inset>
                    <TypoGraphy color="secondary" variant="title">
                    <Link to="/album" className="nav-link">
                    <Store
                                color="primary"
                                fontSize="large"
                                component={svgProps => {
                                return (
                                    <svg {...svgProps}>
                                    <defs>
                                        <linearGradient id="gradient1">
                                        <stop offset="30%" stopColor={blue[400]} />
                                        <stop offset="70%" stopColor={red[400]} />
                                        </linearGradient>
                                    </defs>
                                    {React.cloneElement(svgProps.children[0], {
                                        fill: 'url(#gradient1)',
                                    })}
                                    </svg>
                                );
                                }}
                            />       Productos
                        </Link>
                    </TypoGraphy>
                </ListItemText>

                {!localStorage.getItem('Usuario') ?
                
                <div>

                <ListItemText inset>
                <TypoGraphy variant="title">
                <Link to="/registroposta" className="nav-link">

                <AccountCircle
                            color="primary"
                            fontSize="large"
                            component={svgProps => {
                            return (
                                <svg {...svgProps}>
                                <defs>
                                    <linearGradient id="gradient1">
                                    <stop offset="30%" stopColor={blue[400]} />
                                    <stop offset="70%" stopColor={red[400]} />
                                    </linearGradient>
                                </defs>
                                {React.cloneElement(svgProps.children[0], {
                                    fill: 'url(#gradient1)',
                                })}
                                </svg>
                            );
                            }}
                        />    Registrarse

                    </Link>  
                </TypoGraphy>
            </ListItemText>

          
                <ListItemText inset>
                    <TypoGraphy color="secondary" variant="title">
                    <Link to="/loginPosta" className="nav-link">

                        <AccountBox
                                color="primary"
                                fontSize="large"
                                component={svgProps => {
                                return (
                                    <svg {...svgProps}>
                                    <defs>
                                        <linearGradient id="gradient1">
                                        <stop offset="30%" stopColor={blue[400]} />
                                        <stop offset="70%" stopColor={red[400]} />
                                        </linearGradient>
                                    </defs>
                                    {React.cloneElement(svgProps.children[0], {
                                        fill: 'url(#gradient1)',
                                    })}
                                    </svg>
                                );
                                }}
                            />    Ingresar
                        
                        </Link> 

                    </TypoGraphy>
                </ListItemText>
                </div>
                : ""}

                {localStorage.getItem('basket') ?

                <ListItemText inset>
                    <TypoGraphy color="secondary" variant="title">
                    <Link to="/carrito" className="nav-link">
                    <ShoppingCart
                                color="primary"
                                fontSize="large"
                                component={svgProps => {
                                return (
                                    <svg {...svgProps}>
                                    <defs>
                                        <linearGradient id="gradient1">
                                        <stop offset="30%" stopColor={blue[400]} />
                                        <stop offset="70%" stopColor={red[400]} />
                                        </linearGradient>
                                    </defs>
                                    {React.cloneElement(svgProps.children[0], {
                                        fill: 'url(#gradient1)',
                                    })}
                                    </svg>
                                );
                                }}
                            />   Carrito





                    
                        </Link>




                    </TypoGraphy>
                </ListItemText>

            : ""}


            {localStorage.getItem('Usuario') ?

            <ListItemText inset>
                    <TypoGraphy color="secondary" variant="title">
                    <Link to="/pedidosCliente" className="nav-link">
                    <ShoppingCart
                                color="primary"
                                fontSize="large"
                                component={svgProps => {
                                return (
                                    <svg {...svgProps}>
                                    <defs>
                                        <linearGradient id="gradient1">
                                        <stop offset="30%" stopColor={blue[400]} />
                                        <stop offset="70%" stopColor={red[400]} />
                                        </linearGradient>
                                    </defs>
                                    {React.cloneElement(svgProps.children[0], {
                                        fill: 'url(#gradient1)',
                                    })}
                                    </svg>
                                );
                                }}
                            />   Mis Pedidos





                    
                        </Link>




                    </TypoGraphy>
                </ListItemText>
                : ""}

                {localStorage.getItem('Usuario') ?

                <ListItemText inset>
                    <TypoGraphy color="secondary" variant="title" onClick={()=>prueba()}>
                    <Link to="/blog" className="nav-link">
                    <ShoppingCart
                                color="primary"
                                fontSize="large"
                                component={svgProps => {
                                return (
                                    <svg {...svgProps}>
                                    <defs>
                                        <linearGradient id="gradient1">
                                        <stop offset="30%" stopColor={blue[400]} />
                                        <stop offset="70%" stopColor={red[400]} />
                                        </linearGradient>
                                    </defs>
                                    {React.cloneElement(svgProps.children[0], {
                                        fill: 'url(#gradient1)',
                                    })}
                                    </svg>
                                );
                                }}
                            />   Cerrar Sesion


                        </Link>




                    </TypoGraphy>
                </ListItemText>

            : ""}


                           
            </ListItem >

           
        </List>

        
    )
}


export default withRouter(NavBar);