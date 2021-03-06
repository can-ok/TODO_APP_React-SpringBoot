package com.todo_app.todo_app_springreact.BasicAuth;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable().
                authorizeRequests().antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                .anyRequest().authenticated().and()
                .httpBasic();
        http.headers().frameOptions().disable();

    }
}
