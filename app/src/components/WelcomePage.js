import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

import './mycss.css'

import HelloWorldService from '../api/todo/helloworld_service';

class Welcome extends Component {
    state = { message_name:null,
              costume_message:null }


    stateOnChage=(event)=>{
        
        const {value,name}=event.target;
        this.setState({
                [name]:value
        })

        //console.log(this.state);
    }



    retrive_message=()=>{

        HelloWorldService.executeHelloWorldService()
        .then((response)=>{
            console.log(response);
        })

    }

    
    retrive_message_costume=()=>{

        const {message_name}=this.state;
        HelloWorldService.executeHelloWorldPath(message_name)
        .then((response)=>{
            
            this.setState({
                costume_message:response.data
            })
        })
        .catch((error)=>{
            this.setState({
                costume_message:error.response.data.message
            })
        })

    }

    render() { 
        const user=this.props.match.params.name;
        return ( 
        
        <div className="text-center"> 
                <h2>Welcome <span className="text-danger">{user}</span> </h2>
                <h2>You can change your Todos <Link to="/todo"> Here </Link>  </h2>

                
                <div className="container getmesafe">
                    Click here to get Welcome Message
                     <button className="btn-primary" onClick={this.retrive_message}>Get Welcome Message</button>
                </div>


                 <div className="container getmesafe">
                     <input name="message_name" onChange={this.stateOnChage}/>
                    <div>
                        Click here to get customized welcome page.
                     <button className="btn-primary" onClick={this.retrive_message_costume}>Get Costumized Welcome Message</button>
                    </div>
                    </div>

                    <div className="container  getmesafe">
                        <label className="text-center">{this.state.costume_message}</label>
                    </div>
                   

                </div>

                );
    }
}
 
export default Welcome;