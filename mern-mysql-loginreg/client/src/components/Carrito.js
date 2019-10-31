import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Clear} from '@material-ui/icons'
import {all} from './ProductFunctions'
import Button from '@material-ui/core/Button'

class Carrito extends Component {

    constructor (props) 
    {
        super()
        var comment = JSON.parse(localStorage.getItem('basket'))
        this.state = {
              //items: [],
              items:comment
        }
  
       // all().then(res => {
       //      
       //      this.setState({ items: res });  
      //  });
        console.log(this.state);        
        //this.setState({items:JSON.parse(localStorage.getItem('basket'))});
        
    

     }

    eliminarProducto = (a) =>
    {
        //ACA REMUEVO EL PRODUCTO DE LA VISTA,POR EL ID TRAIDO DEL LOCALSTORAGE
        alert(a);
        let filteredArray = this.state.items.filter(item => item.idProducto !== a)
        this.setState({items: filteredArray});
        

        //ACA REMUEVO EL PRODUCTO DEL LOCALSTORAGE POR EL ID


        
            //var basket = JSON.parse(localStorage.getItem('basket'));
            

            //let filteredArray = this.state.items.filter(item => item.product_id !== a)


        //localStorage.setItem('basket', JSON.stringify(this.state.items));
             
        





       // console.log(this.state);
    }

    componentDidUpdate()
    {
        console.log(this.state);
        localStorage.setItem('basket', JSON.stringify(this.state.items));
    }

     



    render() {
        return (
            <div style={{"padding-top":"50px","padding-bottom":"30px"}}>
                     <div class="cart-table-area section-padding-100" style={{"backgroundColor":"white",
                     "border-radius": "55px 55px 55px 55px",
                     "overflow": "hidden",
                     "border": "black solid 5px !important"}}>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12 col-lg-8">
                                        <div class="cart-title mt-50">
                                            <h2>Carrito de compras</h2>
                                        </div>

                                        <div class="cart-table clearfix">
                                            <table class="table table-responsive">
                                                <thead>
                                                    <tr>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Precio</th>
                                                        <th>Cantidad</th>
                                                        <th>Accion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.items.map(home =>
                                                    <tr>
                                                        <td class="cart_product_img">
                                                                {/*<a href="#"><img src={require('./gatito.jpg')} style={{heigth:'200px',width:'200px'}} alt="Product"/></a>*/}
                                                                <a href="#"><img src={home.imagen} style={{heigth:'200px',width:'200px'}} alt="Product"/></a>
                                                        </td>

                                                        <td class="cart_product_desc">
                                                            <h5>{home.nombre}</h5>
                                                        </td>

                                                        <td class="price">
                                                            <span>{home.precio}$</span>
                                                        </td>

                                                        <td class="qty">
                                                            <div class="qty-btn d-flex">
                                                                <span>{home.quantity}</span>
                                                                

                                                                
                                                            </div>

                                                          
                                                        </td>

                                                        <td>
                                                            <Button onClick={()=>this.eliminarProducto(home.idProducto)} color="primary">
                                                                Eliminar
                                                            </Button>

                                                        </td>

                                                    </tr>)}
                                           
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <div class="cart-summary">
                                    
                                        <Link to="/pagar" style={{"color":"black"}}>
                                                          Pagar
                                                        </Link>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
            
        )
    }
}

export default Carrito