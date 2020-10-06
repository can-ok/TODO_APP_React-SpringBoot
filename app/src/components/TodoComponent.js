import React, { Component } from 'react';
import moment from 'moment';
import {Formik,Form, Field, ErrorMessage} from 'formik';
import TodoDataService from '../api/todo/TodoDataService.js';
import Authentication from './AuthenticationService.js';


class TodoComponent extends Component {
    state = { 
        id:this.props.match.params.id,
        description:" ",
        targetDate:moment(new Date()).format('YYYY-MM-DD')
     }


     componentDidMount(){
        let username=Authentication.getLoggednInUserName() 

        //-1 ise servisi gereksiz yere cagirma
        if(this.state.id==-1){
            return
        }
        else{
            
        }
        let id=this.props.match.params.id
        
        TodoDataService.retrive_specific_todo(username,id)
        .then( (response)=>{
            const {id,description,targetDate}=response.data;

            this.setState({
                id:id,
                description:description,
                targetDate:moment(targetDate).format('YYYY-MM-DD')
            })

            console.log(this.state)

        })

     }

     onSubmit=(values)=>{
        console.log(values)
        let username=Authentication.getLoggednInUserName() 

        //if it is post 
        if(this.state.id==-1){
            
            let create_todo={id:this.state.id,
                            description:values.description,
                            targetDate:values.targetDate}

            TodoDataService.create_todo(username,create_todo).then(
                ()=>this.props.history.push("/todo")
            )
        }
        else{
            let id=this.state.id;
            let update_todo={id:id,description:values.description,targetDate:values.targetDate}
            TodoDataService.update_todo(username,id,update_todo).then(
                ()=> this.props.history.push('/todo') 
            )
    
        }
        
     }

     validate=(values)=>{
         let errors={}
         if(!values.description){
             errors.description='Enter a Description'
         }
         else if(values.description.lenght<5){
             errors.description='Should have at 5 charcter '
         }

         else if(!moment(values.targetDate).isValid()){
            errors.targetDate='incorrect form of target date'
         }
         return errors;
     }

    render() { 

        let {description,targetDate}=this.state;

        return ( <div> 
                 {/* Todo Component for id: <span>{this.props.match.params.id}</span>*/} 

                    <div className="container">
                        <Formik initialValues={{

                            description:description,
                            targetDate:targetDate}}

                            onSubmit={this.onSubmit}

                            validate={this.validate}
                            enableReinitialize={true}
                        >
                            {
                                (props)=>(
                                    <Form>
                                        <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="targetdate" component="label" className="alert alert-warning"/>
                                        <fieldset className="form-group">
                                            <label>Description</label>
                                            <Field className="form-control" type="text" name="description"/>
                                        </fieldset>

                                        <fieldset className="form-group">
                                            <label>Target Date</label>
                                            <Field className="form-control" type="date" name="targetDate"/>
                                        </fieldset>
                                        <button type="submit" className="btn btn-success ">Save</button>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
        </div> );
    }
}
 
export default TodoComponent;