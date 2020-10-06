package com.todo_app.todo_app_springreact.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJpaRepository  extends JpaRepository<Todo,Long> {

    Todo findById(long id);

    List<Todo> findByUsername(String username);
}
