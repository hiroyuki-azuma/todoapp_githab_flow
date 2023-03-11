$("#addTodo").click(function (){
    const inputTodo = $("inout").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});