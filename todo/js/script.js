
document.onload = init
todos = []

function init(){

}

function addTodo(){
    todo = document.getElementById('todoValue').value
    if(todo !== ''){
        todos.push(todo)
    }
    todoList()
}

function todoList(){
    
    let showTodos = document.getElementById('list-todo')
    showTodos.innerHTML = "" // must be removed to ask them questions
    todos.forEach((e,i) => {
        console.log(e);
       showTodos.innerHTML += 
       " <div class='todo-item'>"+
       "<div>"+
            "<span>"+parseInt(i+1)+"</span>"+
            "<b>"+e+"</b>"+
       "</div>"+
       "<div>"+
          "<img src='./images/check-circle.svg' alt='' width='20' onclick='checkTodo("+i+")'> &nbsp;"+
           "<img src='./images/trash-alt.svg' alt='' width='20' onclick='deleteTodo("+i+")'>"+
       "</div>"+
        "</div>"
    });
}

function deleteTodo(index){
    todos.splice(index,1)
    todoList();
}

function checkTodo(index){
    let items = document.querySelectorAll(".todo-item")
    items[index].classList.add('checked')
    // console.log(items)
}