function SubmitTodo(event) {
    event.preventDefault();

    let input_todo = document.getElementById("TextInputTodo").value;
    let todo_list = document.getElementById("ListTodo");

    todo_list.innerHTML = todo_list.innerHTML + '<input type = "checkbox" name="todo" />' + input_todo + '<br>';
}

function ClearTodos(event) {
    event.preventDefault();

    let todo_elements = document.getElementsByName("todo");

    for (let i = 0; i < todo_elements.length; i++) {
        todo_elements[i].checked = false;
    }
}

function MarkTodos(event) {
    event.preventDefault();

    let todo_elements = document.getElementsByName("todo");

    for (let i = 0; i < todo_elements.length; i++) {
        todo_elements[i].checked = true;
    }

}

function DeleteTodos(event) {
    event.preventDefault();

    todo_list = document.getElementById("ListTodo");
    todo_list.innerHTML = "";
}

// Step 1, get all elements.
let submit_todo = document.getElementById("ButtonSubmitTodo");
let clear_todos = document.getElementById("ButtonClearTodo");
let mark_todos = document.getElementById("ButtonMarkTodo");
let delete_todos = document.getElementById("ButtonDeleteTodo");

// Step 2, add the event listener.
submit_todo.addEventListener("click", SubmitTodo);
clear_todos.addEventListener("click", ClearTodos);
mark_todos.addEventListener("click", MarkTodos);
delete_todos.addEventListener("click", DeleteTodos);