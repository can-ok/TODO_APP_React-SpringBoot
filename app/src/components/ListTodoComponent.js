import React, { Component } from 'react';
import Authentication from './AuthenticationService.js';


import TodoDataService from '../api/todo/TodoDataService.js';

class TodoList extends Component {
    state = { todo: [] ,
              delete_sucess_message:null
        }


        componentDidMount(){
            //const user=this.props.match.params.name;
            let username=Authentication.getLoggednInUserName() 
            TodoDataService.retrive_all_todos(username)
            .then((response)=>{
                console.log(response.data)

                this.setState({
                    todo:response.data
                })
                
            })
            console.log(this.state)
        }

        refreshTodos=()=>{

            let username=Authentication.getLoggednInUserName() 
            TodoDataService.retrive_all_todos(username)
            .then((response)=>{
                console.log(response.data)

                this.setState({
                    todo:response.data
                })
                
            })
        }

        

        delete_todo=(id)=>{

            let username=Authentication.getLoggednInUserName()

            //console.log(id)
            //console.log("delete button clicked")
            TodoDataService.delete_todo(username,id)
            .then(
                (response)=>{
                    this.setState({delete_sucess_message:`${id} Successfully deleted`})
                    this.refreshTodos();
                }
            )
        }

        update_todo=(id)=>{

           //console.log(`${id}update`)
           this.props.history.push(`/todo/${id}`) 

        }

        add_todo=()=>{
            //yeni item olduğu için id:-1
            this.props.history.push("todo/-1")
        }

    render() { 

        const list_of_Todos= this.state.todo.map( (state_object) =>{
                //let id=state_object.id;
            return(<tr key={state_object.id}>
                    <td>{state_object.id}</td>
                    <td>{state_object.description}</td>
                    <td>{state_object.done.toString()}</td>
                    <td>{state_object.targetDate}</td>
                    <td><button className="btn btn-warning" onClick={()=>this.delete_todo(state_object.id)}>Delete</button></td>
                    <td><button className="btn btn-success" onClick={()=>this.update_todo(state_object.id)}>Update</button></td>
            </tr>)
        } )
        return ( <div className="text-center container">
                <h2>List of TODOS</h2>
                {this.state.delete_sucess_message && <label className="alert alert-success">{this.state.delete_sucess_message}</label>}                    

                <table className="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>is Completed?</th>
                        <th>Target Date</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list_of_Todos}
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.add_todo}>Add</button>
                </div>
        </div> );
    }
}
 
export default TodoList;