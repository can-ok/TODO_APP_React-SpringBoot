package com.todo_app.todo_app_springreact.todo;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {


    private  static List<Todo> todos=new ArrayList<>();
    private static long idCounter=0;

    static {
        todos.add(new Todo(++idCounter,"Canokan","Learn React",new Date(),false));
        todos.add(new Todo(++idCounter,"Canokan","Learn Spring",new Date(),false));
        todos.add(new Todo(++idCounter,"Canokan","Learn to Dance",new Date(),false));

    }
    public List<Todo> findAll(){
        return todos;
    }

    public Todo findById(long id){
        for(Todo todo:todos){
            if(todo.getId()==id){
                return todo;
            }
        }
        return null;
    }
    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo !=null) {
            todos.remove(todo);
            return todo;
        }
        else{

            return null;
        }

    }

    public Todo save(Todo todo){
        //if it is not in list it is a new one
        if(todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todos.add(todo);
        }else{
            //for update first delet  from list then add
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
}
