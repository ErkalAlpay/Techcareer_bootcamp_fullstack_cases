package com.techcareerfullstack.erkalalpay.Repository;

import com.techcareerfullstack.erkalalpay.Entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TodoRepository extends JpaRepository <Todo, Long> {
    Todo getById(Long id);

}
