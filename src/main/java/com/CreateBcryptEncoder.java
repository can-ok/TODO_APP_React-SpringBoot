package com;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class CreateBcryptEncoder {

    public static void main(String[] args) {

        BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();

        String encoded_pass=encoder.encode("can123456");

        System.out.println(encoded_pass);
    }
}
