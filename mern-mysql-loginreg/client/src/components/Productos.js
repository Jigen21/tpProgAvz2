import React, {Component} from 'react'
import Axios from 'axios'
import {all} from './ProductFunctions'
//import './pagina.css';

class Productos extends Component {

  
    constructor (props) 
    {
        super()
        this.state = {
              items: [],
        }

        all().then(res => {
             
             this.setState({ items: res });  
        });
     }


    render() {
     
        return (
            <div style={{"padding-top":"50px","padding-bottom":"30px"}}>
                

                    <section class="products">

                    {this.state.items.map(home =>
                        <div class="product-card">
                            <div class="product-image">
                                <img src={home.imagen}/>
                                
                            </div>
                            <div class="product-info">
                                <h5>{home.nombre}</h5>
                            </div>
                        </div>)}
                        
                   
                </section>
              
            
            </div>
        )
    }
}

export default Productos