
// window.addEventListener('load', () => {
// 	todos = JSON.parse(localStorage.getItem('todos')) || [];
// 	const nameInput = document.querySelector('#name');
// 	const newTodoForm = document.querySelector('#new-todo-form');

// 	const username = localStorage.getItem('username') || '';

// 	nameInput.value = username;

// 	nameInput.addEventListener('change', (e) => {
// 		localStorage.setItem('username', e.target.value);
// 	})

// 	newTodoForm.addEventListener('submit', e => {
// 		e.preventDefault();

// 		const todo = {
// 			content: e.target.elements.content.value,
// 			category: e.target.elements.category.value,
// 			done: false,
// 			createdAt: new Date().getTime()
// 		}

// 		todos.push(todo);

// 		localStorage.setItem('todos', JSON.stringify(todos));

// 		// Reset the form
// 		e.target.reset();

// 		DisplayTodos()
// 	})

// 	DisplayTodos()
// })

function DisplayWorkouts () {
	const monday = document.querySelector('#monday');
	const tuesday = document.querySelector('#tuesday');
	const wednesday = document.querySelector('#wednesday');
	const thursday = document.querySelector('#thursday');
	const friday = document.querySelector('#friday');
	const saturday = document.querySelector('#saturday');
	const sunday = document.querySelector('#sunday');

	let mondayDate = document.querySelector('.monday');
	let tuesdayDate = document.querySelector('.tuesday');
	let wednesdayDate = document.querySelector('.wednesday');
	let thursdayyDate = document.querySelector('.thursday');
	let fridayDate = document.querySelector('.friday');
	let saturdayDate = document.querySelector('.saturday');
	let sundayDate = document.querySelector('.sunday');



	// let dayday = workoutDay.getDay();

	function getDateXDaysAgo(numOfDays, dateee = new Date()) {
		const daysAgo = new Date();
		daysAgo.setDate(dateee.getDate() + numOfDays);
		
	
		return daysAgo.toDateString();
		// return daysAgo.toDateString();
	}

	const dateee = new Date();
	const workoutDay = new Date()

	for(let workoutDay = 0; workoutDay < 7; workoutDay++){

		 if(workoutDay == 1){
			mondayDate.innerHTML = getDateXDaysAgo(1, dateee);
		}else if(workoutDay == 2){
			tuesdayDate.innerHTML = getDateXDaysAgo(2, dateee);
		}else if(workoutDay == 3){
			wednesdayDate.innerHTML = getDateXDaysAgo(3, dateee);
		}else if(workoutDay == 4){
			thursdayyDate.innerHTML = getDateXDaysAgo(4, dateee);
		}else if(workoutDay == 5){
			fridayDate.innerHTML = getDateXDaysAgo(5, dateee);
		}else if(workoutDay == 6){
			saturdayDate.innerHTML = getDateXDaysAgo(6, dateee);
		}		else if(workoutDay == 0){
			sundayDate.innerHTML = getDateXDaysAgo(0, dateee);
		}
	}


	monday.innerHTML = "";
	tuesday.innerHTML = "";
	wednesday.innerHTML = "";
	thursday.innerHTML = "";
	friday.innerHTML = "";
	saturday.innerHTML = "";
	sunday.innerHTML = "";
	

	workouts.forEach(work => {
		const todoItemWorkout = document.createElement('div');
		todoItemWorkout.classList.add('todo-item');

		const label = document.createElement('label');
		const inputWorkout = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		inputWorkout.type = 'checkbox';
		inputWorkout.checked = work.done;
		span.classList.add('bubble');
		content.classList.add('todo-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');
        
		content.innerHTML = `<input class = "input__me" type="text" value="${work.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';
        
		label.appendChild(inputWorkout);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItemWorkout.appendChild(label);
		todoItemWorkout.appendChild(content);
		todoItemWorkout.appendChild(actions);

		
		if (work.category == 'monday') {
			span.classList.add('business');
            monday.appendChild(todoItemWorkout);

		} else if(work.category == 'tuesday') {
			span.classList.add('business');
            tuesday.appendChild(todoItemWorkout);

		} else if(work.category == 'wednesday') {
			span.classList.add('business');
            wednesday.appendChild(todoItemWorkout);

		} else if(work.category == 'thursday') {
			span.classList.add('business');
            thursday.appendChild(todoItemWorkout);

		} else if(work.category == 'friday') {
			span.classList.add('business');
            friday.appendChild(todoItemWorkout);

		} else if(work.category == 'saturday') {
			span.classList.add('business');
            saturday.appendChild(todoItemWorkout);

		} else if(work.category == 'sunday') {
			span.classList.add('business');
            sunday.appendChild(todoItemWorkout);

		}
        

		if (work.done) {
			todoItemWorkout.classList.add('done');
		}
		inputWorkout.addEventListener("click" ,e => {
            work.done = e.target.checked;
            localStorage.setItem('workouts', JSON.stringify(workouts))

            if(work.done){
                todoItemWorkout.classList.add('done');
				// todoContentInput.style.color = "#fff";
            }else{
                todoItemWorkout.classList.remove('done');
				// todoContentInput.style.color = "#000";
            }
            DisplayWorkouts();
        })

        edit.addEventListener("click", e =>{
            const inputWorkout = content.querySelector('input');
            inputWorkout.removeAttribute('readonly');
            inputWorkout.focus();
            inputWorkout.addEventListener('blur', e =>{
                inputWorkout.setAttribute('readonly', true);
                work.content = e.target.value;
                localStorage.setItem('workouts', JSON.stringify(workouts));
                DisplayWorkouts();
            })

        })

        deleteButton.addEventListener("click", e =>{
            workouts = workouts.filter(t => t!= work);
            localStorage.setItem('workouts', JSON.stringify(workouts));
            DisplayWorkouts();
        })



	})

}


// function getDateXDaysAgo(numOfDays, date = new Date()) {
// 	const daysAgo = new Date(date.getTime());
// 	daysAgo.setDate(date.getDate() - numOfDays);

// 	return daysAgo;
// }
// const dateee = new Date();

// console.log(getDateXDaysAgo(2, dateee));
// console.log(getDateXDaysAgo(4, dateee));