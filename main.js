﻿
let todos = [];
let selectedIndex;

let addBtn, editBtn, delBtn;
let form, inputField;
let list;

getDomElements();

editBtn.disabled = true;
delBtn.disabled = true;


addBtn.addEventListener('click', showForm);
editBtn.addEventListener('click', showForm);

function showForm(e){
	
	form.style.display = 'block';
	
	if(e.target.textContent === 'Add'){
		inputField.value = '';
	} else if (e.target.textContent === 'Edit'){
		inputField.value = todos[selectedIndex]; 
	}

}

okBtn.addEventListener('click', addTodo);


function addTodo(e){

	e.preventDefault();

	todos.push(inputField.value);
	
	let li = document.createElement('li');
	li.textContent = inputField.value; 
	
	li.addEventListener('click', (e) => {
		
		let selected = e.target.classList.contains('selected');

		let items = document.getElementsByTagName('li');
		
		for(var i = 0; i < items.length; i++){
			items[i].classList.remove('selected');
		}
		
		if(selected){

			e.target.classList.remove('selected');

			editBtn.disabled = true;
			delBtn.disabled = true;
		
		} else {
			
			e.target.classList.add('selected');
			
			editBtn.disabled = false;
			delBtn.disabled = false;
			
			selectedIndex = todos.indexOf(e.target.textContent);
			// console.log('index: ' + index);
		}		

		
	});
	
	list.appendChild(li);
	
	form.style.display = 'none';
	
}



function getDomElements(){
	
	list = document.getElementById('list');

	addBtn = document.getElementById('add-btn');
	editBtn = document.getElementById('edit-btn');
	delBtn = document.getElementById('del-btn');

	inputField = document.getElementById('todo');
	okBtn = document.getElementById('ok');
	
	form = document.getElementById('form'); 
	
}










