import React, {Component} from 'react'
import Axios from 'axios'
import {all} from './ProductFunctions'

class Prueba extends Component {

    /*async componentDidMount() 
    {
        const response = await Axios.get('/api/todos')
        const toDoItems = response.data
        this.setState({toDoItems: toDoItems}) // or this.setState({toDoItems})
       }*/
   /* componentDidMount()
    {
        all().then(res => {
            if(res) {
                console.log(res)
                

            }
        })
    }   */

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
        console.log(this.state.items);
        return (
            <div className="container" style={{"padding-top":"50px","padding-bottom":"30px"}}>
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PRODUCTOS</h1>
                           
                        {this.state.items.map(home =>
                             <div>
                                    <li>
                                        {home.nombre}

                                        
                                    </li>
                            </div>)}

                    </div>
                
                </div>            
            
            </div>
        )
    }
}

export default Prueba