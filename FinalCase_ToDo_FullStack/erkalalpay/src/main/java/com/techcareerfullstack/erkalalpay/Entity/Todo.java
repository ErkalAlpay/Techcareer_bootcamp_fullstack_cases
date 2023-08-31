package com.techcareerfullstack.erkalalpay.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "todos")
public class Todo extends BaseEntity{
    @Id
    private Long id;

    private String todo;

    private Boolean isCompleted = false;



}
