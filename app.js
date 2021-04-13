//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners

todoButton.addEventListener('click', addTodo);

//new todo
function addTodo(event){
    //não dá refresh
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'test';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check btn
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash btn
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton);
    //apend list
    todoList.appendChild(todoDiv);
}