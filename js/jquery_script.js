$(document).ready(function(){

$("#ButtonSubmitTodo").click(SubmitTodo);
$("#ButtonClearTodo").click(ClearTodos);
$("#ButtonMarkTodo").click(MarkTodos);
$("#ButtonDeleteTodo").click(DeleteTodos);
  
});

function SubmitTodo(event) {
    event.preventDefault();

    let input_todo = $("#TextInputTodo").val();
    $("#ListTodo").append($('<input type = "checkbox" name="todo"/>' + input_todo + '<br>'));
}


function ClearTodos(event) {
    event.preventDefault();

    ChangeAllCheck(false);
}

function MarkTodos(event) {
    event.preventDefault();

    ChangeAllCheck(true);
}

function DeleteTodos(event) {
    event.preventDefault();

    $("#ListTodo").empty();
}

function ChangeAllCheck(status) {
    let todo_elements = $('input[name="todo"]');

    for (let i = 0; i < todo_elements.length; i++) {
        todo_elements[i].checked = status;
    }
}
