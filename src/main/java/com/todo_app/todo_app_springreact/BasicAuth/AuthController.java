package com.todo_app.todo_app_springreact.BasicAuth;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean login(){

        return new AuthenticationBean("You are authenticated");
    }

}
