
todos = []
function addTodoItem(){
    let todoValue = document.getElementById('todoValue') // Recuperer le formulaire
    if(todoValue !== ""){
        todos.push(todoValue.value)
        todoList()
        todoValue.value = ""
    }else
        console.error("Le champ ne peut qu'être vide")
}

function todoList(){
    let todoList = document.getElementById("todo-list")
    todoList.innerHTML = "" // Vider le DOM ou le contenu avant un nouvel ajout
    todos.forEach((e,i) => {
        console.log(e);
        todoList.innerHTML += 
        "<div class='todo-item'>"+
        "<div>"+
            "<span>"+parseInt(i+1)+"</span>"+
            "<b>"+e+"</b>"+
        "</div>"+
        "<div class='actions'>"+
            "<img src='../images/check-circle.svg' alt='' width='16'>"+
            "<img src='../images/trash-alt.svg' alt='' width='16' onclick='deleteTodoItem("+i+")'>"+
        "</div>"+
    "</div>"
    });
}

function deleteTodoItem(index){
    todos.splice(index,1)
    todoList();
}

// document.getElementById("btn-add").addEventListener("click",function(){

// })
