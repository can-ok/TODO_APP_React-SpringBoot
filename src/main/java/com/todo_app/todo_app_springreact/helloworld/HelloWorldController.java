package com.todo_app.todo_app_springreact.helloworld;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping(path ="/hello")
    public String helloWorld(){
        System.out.println("oldu");
        return "Hello World";
    }

    @GetMapping(path ="/hello/{name}")
    public String helloWorlPath(@PathVariable String name){
        return "Hello "+name;
    }
}
