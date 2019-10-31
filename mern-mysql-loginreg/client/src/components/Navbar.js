import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/loginposta" className="nav-link">
                        Entrar
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/registroposta" className="nav-link">
                        Registrarse
                    </Link>

                </li>

                <li className="nav-item">
                    <Link to="/productos" className="nav-link">
                        Productos
                    </Link>

                </li>

                <li className="nav-item">
                    <Link to="/album" className="nav-link">
                        Album
                    </Link>

                </li>

                <li className="nav-item">
                    <Link to="/prueba" className="nav-link">
                        Prueba
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="/Carrito" className="nav-link">
                        Carrito
                    </Link>

                </li>

                 <li className="nav-item">
                    <Link to="/pagar" className="nav-link">
                        Pagar
                    </Link>

                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                   <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>

                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>


                </button>

                <div className="collapse navbar-collapse justify-content-md-center"
                id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                            
                                Home
                            </Link>
                        
                        </li>
                    
                    </ul>

                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>

            </nav>
       
       
        )
    }
}


export default withRouter(Navbar)