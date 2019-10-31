import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Gallery, GalleryImage } from "react-gesture-gallery";
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Productos from './components/Productos'
import Prueba from './components/Prueba'
import Carrusel from './components/Carrusel'
import Carrito from './components/Carrito'
import registroPosta from './components/RegistroPosta'
import loginPosta from './components/loginPosta'
import Checkout from './components/Checkout'
import Album from './components/Album'
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import TypoGraphy from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import NavBarPosta from './components/NavBarPosta'
import Blog from './components/Blog'
import Administrador from './components/Administrador'
import PedidosCliente from './components/PedidosCliente'
import CerrarSesion from './components/CerrarSesion'


function App() {
  
  return (
        
    <div className="App">

    <audio controls autoPlay loop hidden>
      <source src="shop.mp33"/>
      </audio>
         

    
    <Router>

        <AppBar color="primary" position="static">
         <Toolbar>
         <TypoGraphy variant="title"
              color="inherit"
            >
                 <NavBarPosta/>
           </TypoGraphy>
         </Toolbar>
         
         </AppBar>

       
         
        <div className="App">
        {/*<Navbar/>*/}
        
          <Route exact path="/" component={loginPosta} />
          
          
          <div className="container">
            <Route exact path="/administrador" component={Administrador}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/registroposta" component={registroPosta} />
            <Route exact path="/loginposta" component={loginPosta} />
            <Route exact path="/pagar" component = {Checkout}/>
            <Route exact path="/album" component = {Album}/>
            <Route exact path="/blog" component = {Blog}/>
            <Route exact path="/pedidosCliente" component = {PedidosCliente}/>
            <Route exact path="/cerrarSesion" component = {CerrarSesion}/>
            
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/prueba" component={Prueba} />
            <Route exact path="/carrusel" component={Carrusel} />
            <Route exact path="/carrito" component={Carrito} />
            <Route exact path="/borrar" component={Landing}/>

          
          
          </div>


             <footer class="footer_area clearfix" style={{"position":"fixed","width":"100%","bottom":"0","left":"0","height":"30px","z-index":"9999"}}>
                        <div class="container">
                            <div class="row align-items-center">
                             
                                <div class="col-12 col-lg-4">
                                    <div class="single_widget_area">
                                    
                                        


                                      <p class="copywrite">PetLovers
                                        <i class="fa fa-heart-o" aria-hidden="true"></i> Por Axel Francisco Quinteros - Hector Mendieta
                                        </p>
                                   
                                      
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </footer>

        
        </div>
      </Router>
      </div>
  );
}

export default App;
