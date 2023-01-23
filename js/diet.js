
function DisplayTodosDiet () {
	const mondayDiet = document.querySelector('#monday__diet');
	const tuesdayDiet = document.querySelector('#tuesday__diet');
	const wednesdayDiet = document.querySelector('#wednesday__diet');
	const thursdayDiet = document.querySelector('#thursday__diet');
	const fridayDiet = document.querySelector('#friday__diet');
	const saturdayDiet = document.querySelector('#saturday__diet');
	const sundayDiet = document.querySelector('#sunday__diet');

	mondayDiet.innerHTML = "";
	tuesdayDiet.innerHTML = "";
	wednesdayDiet.innerHTML = "";
	thursdayDiet.innerHTML = "";
	fridayDiet.innerHTML = "";
	saturdayDiet.innerHTML = "";
	sundayDiet.innerHTML = "";
	

	todosDiet.forEach(tododiet => {
		const todoItemDiet = document.createElement('div');
		todoItemDiet.classList.add('todo__item-diet');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'checkbox';
		input.checked = tododiet.done;
		span.classList.add('bubble');
		content.classList.add('todo-content__diet');
		actions.classList.add('actions__diet');
		edit.classList.add('edit__diet');
		deleteButton.classList.add('delete__diet');
        
		content.innerHTML = `<input class = "input__me-diet input__me" type="text" value="${tododiet.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';
        
		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItemDiet.appendChild(label);
		todoItemDiet.appendChild(content);
		todoItemDiet.appendChild(actions);

		
		if (tododiet.category == 'monday__diet') {
			span.classList.add('business');
            mondayDiet.appendChild(todoItemDiet);

		} else if(tododiet.category == 'tuesday__diet') {
			span.classList.add('business');
            tuesdayDiet.appendChild(todoItemDiet);

		} else if(tododiet.category == 'wednesday__diet') {
			span.classList.add('business');
            wednesdayDiet.appendChild(todoItemDiet);

		} else if(tododiet.category == 'thursday__diet') {
			span.classList.add('business');
            thursdayDiet.appendChild(todoItemDiet);

		} else if(tododiet.category == 'friday__diet') {
			span.classList.add('business');
            fridayDiet.appendChild(todoItemDiet);

		} else if(tododiet.category == 'saturday__diet') {
			span.classList.add('business');
            saturdayDiet.appendChild(todoItemDiet);

		} else if(tododiet.category == 'sunday__diet') {
			span.classList.add('business');
            sundayDiet.appendChild(todoItemDiet);

		}
        

		if (tododiet.done) {
			todoItemDiet.classList.add('done');
		}
		input.addEventListener("click" ,f => {
            tododiet.done = f.target.checked;
            localStorage.setItem('todosDiet', JSON.stringify(todosDiet))

            if(tododiet.done){
                todoItemDiet.classList.add('done');
				// todoContentInput.style.color = "#fff";
            }else{
                todoItemDiet.classList.remove('done');
				// todoContentInput.style.color = "#000";
            }
            DisplayTodosDiet();
        })

        edit.addEventListener("click", f =>{
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', f =>{
                input.setAttribute('readonly', true);
                tododiet.content = f.target.value;
                localStorage.setItem('todosDiet', JSON.stringify(todosDiet));
                DisplayTodosDiet();
            })

        })

        deleteButton.addEventListener("click", f =>{
            todosDiet = todosDiet.filter(d => d!= tododiet);
            localStorage.setItem('todosDiet', JSON.stringify(todosDiet));
            DisplayTodosDiet();
        })


	})

}

