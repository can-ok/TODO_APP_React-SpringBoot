import Axios from 'axios';

class TodoDataService{

    retrive_all_todos(username){

        //return 
        let response=Axios.get(`/todos/${username}`)
        //console.log(response)
        return response;
    }

    retrive_specific_todo(username,id){
        //localhost:8080/todo/can/1
        return Axios.get(`/todo/${username}/${id}`)
    }

    update_todo(username,id,todo){

        return Axios.put(`/todo/${username}/${id}`,todo)
    }

    create_todo(username,todo){

        // /todo/{username}
        return Axios.post(`/todo/${username}`,todo)
    }

    delete_todo(username,id){
        //localhost:8080/todo/{username}/{id}
        return Axios.delete(`/todo/${username}/${id}`);
    }

}


export default new TodoDataService();