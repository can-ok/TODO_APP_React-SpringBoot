import React from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
 
import LoginPage from './LoginPage'

import Welcome from './WelcomePage'

import ErrorPage from './ErrorPage'

import TodoList from './ListTodoComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent'

import Logout from './LogoutComponet'

import TodoComponent from './TodoComponent'
 

const Router=()=>{
    return(
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/welcome/:name" component={Welcome}/>
        <Route exact path="/todo" component={TodoList} />
        <Route exact path="/todo/:id" component={TodoComponent} />
        <Route exact path="/logout" component={Logout} />
        <Route component={ErrorPage}/>
    </Switch>
    <Footer/>
    </BrowserRouter>)

}


export default Router;