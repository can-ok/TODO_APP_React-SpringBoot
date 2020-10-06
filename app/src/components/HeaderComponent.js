import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Link} from 'react-router-dom'

import Authentication from './AuthenticationService.js';

class Header extends Component {
    state = {}


    
    
    render() { 

        const userLogin=Authentication.isUserLogedIn();
        return ( 

            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand">Logo</a></div>

                    <ul className="navbar-nav">
                        {userLogin && <li><Link to="/welcome" className="nav-link">home </Link></li>}
                        {userLogin &&<li><Link to="/todo" className="nav-link"> Todo</Link></li>}
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end  ">
                        {
                            userLogin?<li ><Link  to="/logout" className="nav-link"  onClick={Authentication.logout}>Logout</Link></li>:<li ><Link  to="/login" className="nav-link"> Login</Link></li>
                        
                        }

                    </ul>
                </nav>
            </header>
         );
    }
}
 
export default Header;