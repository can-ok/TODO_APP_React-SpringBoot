package com.todo_app.todo_app_springreact.todo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


@RestController
public class TodoController {

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping(path = "/todos/{username}")
    public List<Todo> getAllTodos(@PathVariable String username){

        return todoJpaRepository.findByUsername(username);
    }
    //Get specific todo for the update

    @GetMapping(path="/todo/{username}/{id}")
    public Todo getTodo(@PathVariable String username,@PathVariable long id){

        return todoJpaRepository.findById(id);
    }



    @DeleteMapping(path = "/todo/{username}/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username,@PathVariable long id){
        todoJpaRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping(path = "/todo/{username}/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable long id,@RequestBody Todo newTodo){
        newTodo.setUsername(username);

        Todo todo=todoJpaRepository.save(newTodo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    Logger logger = LoggerFactory.getLogger(TodoController.class);

    @PostMapping(path ="/todo/{username}")
    public ResponseEntity<Void> createTodo(@RequestBody Todo todo,@PathVariable String username){

        //beacuse we'r not getting username from client
        todo.setUsername(username);

        Todo createdTodo=todoJpaRepository.save(todo);

        logger.info("Denenme:");
        logger.info(String.valueOf(createdTodo.getId()));
        URI uri= ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();

    }
}
