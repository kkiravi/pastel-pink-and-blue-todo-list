let todoList = JSON.parse(localStorage.getItem('todoList')) || []; 
renderTodoList(); 

function renderTodoList() {
    let todoListHTML = '';

    for (let index = 0; index < todoList.length; index++) {
        const todoObject = todoList[index];
        const {name} = todoObject;
        const {dueDate} = todoObject;
        const html = `<p>${name} ${dueDate} <button onclick="todoList.splice(${index}, 1); renderTodoList();" class="remove-button">delete</button></p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todolist').innerHTML = todoListHTML;
    localStorage.setItem('todoList', JSON.stringify(todoList)); 
}

function toDo() {
    const addTodo = document.querySelector('.todo-list');
    const addDate = document.querySelector('.due-list');
    const name = addTodo.value.trim(); 
    const dueDate = addDate.value.trim();
    if (name) { 
        todoList.push({name, dueDate});
        localStorage.setItem('todoList', JSON.stringify(todoList)); 
        addTodo.value = '';
        addDate.value='';

        renderTodoList();
    }

}
document.addEventListener('keydown', whatKey);
function whatKey(event){
    
    console.log(event.key);
    if (event.key === 'Enter') {
        toDo();
    }
}


