window.addEventListener('load', () => {
	workouts = JSON.parse(localStorage.getItem('workouts')) || [];
	todosDiet = JSON.parse(localStorage.getItem('todosDiet')) || [];
	todos = JSON.parse(localStorage.getItem('todos')) || [];

	const nameInput = document.querySelector('#name');
	const newWorkout = document.querySelector('#new-todo-form');
	const newTodoFormDiet = document.querySelector('#new-todo-form-diet');
	const newTodo = document.querySelector('#new-todo');

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
		// const enableDarkMode = () => {
		// nameInput.style.color = "#fff";
		// }
		// enableDarkMode();
	})

	newWorkout.addEventListener('submit', e => {
		e.preventDefault();

		const work = {
			content: e.target.elements.content.value,
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		workouts.push(work);

		localStorage.setItem('workouts', JSON.stringify(workouts));

		// Reset the form
		e.target.reset();

		DisplayWorkouts();
	})

	DisplayWorkouts();

	newTodoFormDiet.addEventListener('submit', f => {
		f.preventDefault();

		const tododiet = {
			content: f.target.elements.content_diet.value,
			category: f.target.elements.category_diet.value,
			done: false,
			createdAt: new Date().getTime()
		}

		todosDiet.push(tododiet);

		localStorage.setItem('todosDiet', JSON.stringify(todosDiet));

		// Reset the form
		f.target.reset();

		DisplayTodosDiet()
	})

	DisplayTodosDiet()
	
	newTodo.addEventListener('submit', g => {
		g.preventDefault();

		const todo = {
			content: g.target.elements.content_todo.value,
			category: g.target.elements.category__todo.value,
			done: false,
			createdAt: new Date().getTime()
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
		g.target.reset();

		DisplayTodos();
	})

	DisplayTodos();
	
	let darkMode = localStorage.getItem('darkMode');
	const darkModeToggle = document.querySelector('#mode');
	const timeContainer = document.querySelector('.time__container');
	const greetingContainer = document.querySelector('.title');	

	const toDoContainer = document.querySelector('.todo__title');	
	const toDoContainerDiet = document.querySelector('.todo__title-diet');	
	const toDoContainerTodo = document.querySelector('.todo__title-todo');	
	
	const namee = document.querySelector('#name');	
	const iconChange = document.querySelector('#mode');

	const todoList = document.querySelectorAll('.todo-list');
	const todoListDiet = document.querySelectorAll('.todo-list-diet');
	const todo = document.querySelectorAll('.todo__item-todo');

	const optionLabel = document.querySelectorAll('.options label');
	const optionLabelDiet = document.querySelectorAll('.options__diet label');
	const optionLabelTodo = document.querySelectorAll('.options__todo label');

	const optionDiv = document.querySelectorAll('.create-todo .options label div');
	const optionDivDiet = document.querySelectorAll('.create-todo-diet .options__diet label div');
	const optionDivTodo = document.querySelectorAll('.create__todo .options__todo label div');

	const content = document.getElementById('content');		
	const contentDiet = document.getElementById('content_diet');	
	const contentTodo = document.getElementById('content_todo');	

	const tabsBtn = document.querySelectorAll('.tabs__button');
	// const tabsBtnDiet = document.querySelectorAll('.tabs__button');

	const tabBtnActive = document.querySelectorAll('.tabs__button--active');
	// const tabBtnActiveDiet = document.querySelectorAll('.tabs__button--active');

	const todoTitleWhite = document.querySelectorAll('.todo__title-white');
	// const todoTitleWhiteDiet = document.querySelectorAll('.todo__title-white');
	
		
	const enableDarkMode = () => {
		document.body.classList.add('darkmode');
		document.body.style.transition = ".3s easy-in-out";
		timeContainer.classList.add('darkmode');

		toDoContainer.classList.add('darkmode');
		toDoContainerDiet.classList.add('darkmode');
		toDoContainerTodo.classList.add('darkmode');

		greetingContainer.style.color = "#fff";

		content.style.backgroundColor = "#334756";
		content.style.color = "#fff";

		contentDiet.style.backgroundColor = "#334756";
		contentDiet.style.color = "#fff";

		contentTodo.style.backgroundColor = "#334756";
		contentTodo.style.color = "#fff";
		
		
		namee.style.color = "#fff";
		iconChange.innerHTML = `<svg class="mode_icon" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 32.173 36">
		<path id="to-dark" d="M19.913,36A17.965,17.965,0,0,0,33.9,29.335a.844.844,0,0,0-.813-1.361,14.1,14.1,0,0,1-9.616-26.11A.844.844,0,0,0,23.2.3,18,18,0,1,0,19.913,36Z" transform="translate(-1.913 0)" fill="#fff"/>
		</svg>`
		
		for( const optionD of optionDiv){
			optionD.style.color = "#fff";
		}
		for( const optionD of optionDivDiet){
			optionD.style.color = "#fff";
		}
		for( const optionD of optionDivTodo){
			optionD.style.color = "#fff";
		}
		
		for( const option of optionLabel){
			option.style.backgroundColor = "#334756";
			option.style.color = "#fff";
		}
		for( const option of optionLabelDiet){
			option.style.backgroundColor = "#334756";
			option.style.color = "#fff";
		}
		for( const option of optionLabelTodo){
			option.style.backgroundColor = "#334756";
			option.style.color = "#fff";
		}
		
		for( const list of todoList){
			list.style.backgroundColor = "#334756";
			list.style.color = "#fff";
		}
		for( const list of todoListDiet){
			list.style.backgroundColor = "#334756";
			list.style.color = "#fff";
		}
		for( const list of todo){
			list.style.backgroundColor = "#334756";
			list.style.color = "#fff";
		}
		for( const tabs of tabsBtn){
			tabs.style.backgroundColor = "#334756";

			// tabActive.style.color = "#fff";
		}
		for( const tabActive of tabBtnActive){
			tabActive.style.backgroundColor = "#334756";
		}
		for( const titleWhite of todoTitleWhite){
			titleWhite.style.color = "#fff";
		}

		localStorage.setItem('darkMode', 'enabled');

	}
	const disableDarkMode = () => {
		document.body.classList.remove('darkmode');
		document.body.style.transition = ".3s easy-in-out";
		timeContainer.classList.remove('darkmode');
		greetingContainer.classList.remove('darkmode');

		toDoContainer.classList.remove('darkmode');
		toDoContainerDiet.classList.remove('darkmode');
		toDoContainerTodo.classList.remove('darkmode');

		greetingContainer.style.color = "#313154";

		content.style.backgroundColor = "#FFF";
		content.style.color = "#313154";

		contentDiet.style.backgroundColor = "#FFF";
		contentDiet.style.color = "#313154";

		contentTodo.style.backgroundColor = "#FFF";
		contentTodo.style.color = "#313154";

		namee.style.color = "#313154";
		iconChange.innerHTML = `<svg class="mode_icon" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 29.944 29.944">
		<path id="to-white" d="M31.5,19.185A13.5,13.5,0,1,1,16.815,4.5,10.5,10.5,0,0,0,31.5,19.185Z" transform="translate(-3.056 -3)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
		</svg>`
		
		for( const optionD of optionDiv){
			optionD.style.color = "#000";
		}
		for( const optionD of optionDivDiet){
			optionD.style.color = "#000";
		}
		for( const optionD of optionDivTodo){
			optionD.style.color = "#000";
		}
		
		for( const option of optionLabel){
			option.style.backgroundColor = "#fff";
			option.style.color = "var(--dark)";
		}
		for( const option of optionLabelDiet){
			option.style.backgroundColor = "#fff";
			option.style.color = "var(--dark)";
		}
		for( const option of optionLabelTodo){
			option.style.backgroundColor = "#fff";
			option.style.color = "var(--dark)";
		}
		
		for( const list of todoList){
			list.style.backgroundColor = "#FFF";
			list.style.color = "#000";
		}
		for( const list of todoListDiet){
			list.style.backgroundColor = "#FFF";
			list.style.color = "#000";
		}
		for( const list of todo){
			list.style.backgroundColor = "#FFF";
			list.style.color = "#000";
		}
		for( const tabs of tabsBtn){
			tabs.style.backgroundColor = "#FFF";
			// tabs.style.color = "#fff";
		}
		for( const tabActive of tabBtnActive){
			tabActive.style.backgroundColor = "#FFF";
			// tabActive.style.color = "#fff";
		}
		for( const titleWhite of todoTitleWhite){
			titleWhite.style.color = "var(--grey)";
		}

		localStorage.setItem('darkMode', null);
	}
	
	if (darkMode == 'enabled'){
		enableDarkMode();
	}
	

			
	darkModeToggle.addEventListener("click", () =>{
		darkMode = localStorage.getItem('darkMode');
		if(darkMode !== 'enabled'){
			enableDarkMode();
			if(tabsBtn == '.tabs__button--active'){
				tabBtnActive.style.color = "#EA40A4";
				tabBtnActive.style.backgroundColor = "#334756";
				tabsBtn.style.backgroundColor = "#334756";
			}
		}else{
			disableDarkMode();
			if(tabsBtn == '.tabs__button--active'){
				tabBtnActive.style.color = "#EA40A4";
				tabsBtn.backgroundColor = "#334756";
			}
		}
		
	})
	
})


function setupTabs() {
    document.querySelectorAll('.tabs__button').forEach(button =>{
        button.addEventListener("click", () =>{
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            // const sideBar = document.querySelector('.tabs__sidebar');
            // const tabsContainer = document.querySelector('.tabs')
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab = "${tabNumber}"]`);

            sideBar.querySelectorAll('.tabs__button').forEach(button =>{
                button.classList.remove('tabs__button--active');
            });
            tabsContainer.querySelectorAll('.tabs__content').forEach(tab =>{
                tab.classList.remove('tabs__content--active');
            });
            button.classList.add('tabs__button--active');
            tabToActivate.classList.add('tabs__content--active');

        });
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    setupTabs();

    document.querySelectorAll('.tabs').forEach(tabsContainer =>{
        tabsContainer.querySelector('.tabs__sidebar .tabs__button').click();
    })
});






let timeput = document.getElementById('time-output');
let numberDate = document.getElementById('date-output');
let dayoutput = document.getElementById('day-output');

let today = new Date();


let month = today.getMonth();
let year = today.getFullYear();
let dayNr = today.getDate();


switch(month){
	case 0:
		month = 1;
		break;
	case 1:
		month = 2;
		break;
	case 2:
		month = 3;
		break;
	case 3:
		month = 4;
		break;
	case 4:
		month = 5;
		break;
	case 5:
		month = 6;
		break;
	case 6:
		month = 7;
		break;
	case 7:
		month = 8;
		break;
	case 8:
		month = 9;
		break;
	case 9:
		month = 10;
		break;
	case 10:
		month = 11;
		break;
	case 11:
		month = 12;
		break;
	}


if(month < 10) {
	month = '0' + month;
}

if(dayNr < 10) {
	dayNr = '0' + dayNr;

}

let date = dayNr + '/' + (month) + '/' + (year)


let day = today.getDay();
switch (day){
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursdat";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
		break;
}



function startTime() {
	
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let secound = today.getSeconds();

let amPm = 'am';
	if(hours > 12) {
		amPm = "pm"
		hours = hours - 12;
	}

	if(hours < 10) {
		hours = '0' + hours;
	}

	if(minutes < 10) {
		minutes = '0' + minutes;
	}
	if(secound < 10) {
		secound = '0' + secound;
	}

let time = hours + ' : ' + minutes + ' : ' + secound + ' ' + amPm;

timeput.innerHTML = time;
numberDate.innerHTML =  date;
dayoutput.innerHTML = day;
setTimeout(function(){startTime()}, 1000);
}

