import React, { Component } from 'react';
import Authentication from './AuthenticationService.js';


class LoginPage  extends Component {
    state = { 
        username:null,
        password:null,
        loginTrue:true
     }

     onClicked=(event)=>{

        const {username,password}=this.state;
        event.preventDefault()
        
        
           // this parts belongs to Basic Authentication
        Authentication.executeBasicAuthenticationService(username,password)
        .then(()=>{
            this.setState({loginTrue:true})
            Authentication.registerSuccesfullyLogin(username,password)
            this.props.history.push(`/welcome/${this.state.username}`)

        }).catch(
            ()=>{
                this.setState({loginTrue:false})

            }
        ) 
        

           /*  Authentication.executeJWTAuthentaicationService(username,password)
            .then((response)=>{
                    Authentication.registerSuccessfulLoginForJWT(username,response.data.token)
                    this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(
                ()=>{
                    this.setState({loginTrue:false})
    
                }
            ) */

     }

     onChangeState=(event)=>{
        
        const {value,name}=event.target;
        
        this.setState({
            [name]:value
        })
        
     }
    render() { 
        return ( 
                <div className="container">
                    <form>
                        {this.state.loginTrue? <div>Sucess</div>:<div className="alert alert-warning">Login Failed</div>}
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input  className="form-control" placeholder="Enter username" name="username" onChange={this.onChangeState}/>
                        </div>

                 
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input type="password" className="form-control"  placeholder="Password" name="password" onChange={this.onChangeState}/>
                        </div>
                        <div className="text-center">
                        <button  type="submit" className="btn btn-primary" onClick={this.onClicked}>Login</button>
                        </div>
                    </form>

                </div>
          );
    }
}
 
export default LoginPage ;