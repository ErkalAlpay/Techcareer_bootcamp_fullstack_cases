package com.techcareerfullstack.erkalalpay.Controller;
import com.techcareerfullstack.erkalalpay.Dto.TodoDTO;
import com.techcareerfullstack.erkalalpay.Service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController("/index")
public class TodoController {
    @Autowired
    private TodoService todoService;


    @PostMapping("/create")
    public void saveTodo(@RequestBody TodoDTO todo){
        todoService.save(todo);

    }

    @PostMapping("/update")
    public TodoDTO updateTodo (String newTodo, Long id){

        todoService.updateTodos(id, newTodo);

        return null;
    }

}
