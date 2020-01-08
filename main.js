
let todos = [];

let addBtn, editBtn, delBtn;
let form, inputField;

let list;

list = document.getElementById('list');

addBtn = document.getElementById('add-btn');
editBtn = document.getElementById('edit-btn');
delBtn = document.getElementById('del-btn');

inputField = document.getElementById('todo');
okBtn = document.getElementById('ok');

editBtn.disabled = true;
delBtn.disabled = true;

form = document.getElementById('form'); 


addBtn.addEventListener('click', showForm);
// editBtn.addEventListener('click', showForm);

function showForm(e){
	
	form.style.display = 'block';
	
	if(e.target.textContent === 'Add'){
		console.log('Add');
	}

}

okBtn.addEventListener('click', addTodo);

function addTodo(e){

	e.preventDefault();

	todos.push(td);
	console.log(todos);
	
	let li = document.createElement('li');
	li.textContent = inputField.value; 
	
	list.appendChild(li);
	
	form.style.display = 'none';
}














