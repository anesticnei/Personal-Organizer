function DisplayTodos () {
    const toDoIt = document.querySelector('#todo');
    	// const todoList = document.querySelector('#todo-list');

        toDoIt.innerHTML = "";
        
    todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo__item-todo');

		const label = document.createElement('label');
		const inputTodo = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		inputTodo.type = 'checkbox';
		inputTodo.checked = todo.done;
		span.classList.add('bubble');
		content.classList.add('todo-content__todo');
		actions.classList.add('actions__todo');
		edit.classList.add('edit__todo');
		deleteButton.classList.add('delete_todo');
        
		content.innerHTML = `<input class = "input__me-todo input__me" type="text" value="${todo.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';
        
		label.appendChild(inputTodo);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);


    if (todo.category == 'now') {
        span.classList.add('personal');
        toDoIt.appendChild(todoItem);

    } else if(todo.category == 'later') {
        span.classList.add('business');
        toDoIt.appendChild(todoItem);

    } 

    if (todo.done) {
        todoItem.classList.add('done');
    }
    inputTodo.addEventListener("click" ,g => {
        todo.done = g.target.checked;
        localStorage.setItem('todos', JSON.stringify(todos))

        if(todo.done){
            todoItem.classList.add('done');
            // todoContentInput.style.color = "#fff";
        }else{
            todoItem.classList.remove('done');
            // todoContentInput.style.color = "#000";
        }
        DisplayTodos();
    })

    edit.addEventListener("click", g =>{
        const inputTodo = content.querySelector('input');
        inputTodo.removeAttribute('readonly');
        inputTodo.focus();
        inputTodo.addEventListener('blur', g =>{
            inputTodo.setAttribute('readonly', true);
            todo.content = g.target.value;
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos();
        })

    })

    deleteButton.addEventListener("click", g =>{
        todos = todos.filter(c => c!= todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
    })

})

}


