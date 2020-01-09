
let todos = ["Prvi zadatak", "Nesto drugo da uradim", "Treca stvar", "Na kraju i ovo"];
// let todos = [];
let selectedIndex = -1;

let btns, addBtn, editBtn, delBtn;
let form, message, inputField;
let list;
let okBtn, cancelBtn;
let editMode = false;


getDomElements();

editBtn.disabled = true;
delBtn.disabled = true;

populateList();

addBtn.addEventListener('click', showForm);
editBtn.addEventListener('click', showForm);

function showForm(e){
	
	form.style.display = 'block';	
	btns.style.display = 'none';
	
	let lbl;
	
	if(e.target.textContent === 'Add'){
		
		inputField.value = '';
		editMode = false;
		
		lbl = 'Adding...';
	
	} else if (e.target.textContent === 'Edit'){
	
		editMode = true;
		inputField.value = todos[selectedIndex]; 
	
		lbl = 'Editing...';
	}
	
	message.textContent = lbl;
	message.style.display = "block";
	
}


okBtn.addEventListener('click', refreshList);

function refreshList(e){

	e.preventDefault();
	
	let items = document.getElementsByTagName('li');

	if(!editMode){
		
		if(selectedIndex === -1){			
			todos.push(inputField.value);		
		} else {
			todos.splice(selectedIndex + 1, 0, inputField.value);		
		}	
			
		let li = document.createElement('li');
		li.textContent = inputField.value; 
			
		li.addEventListener('click', toggleSelect);
	
	} else if(editMode){
		
		todos[selectedIndex] = inputField.value; 
		
	}
	
	btns.style.display = 'block';
	
	populateList();
	
	form.style.display = 'none';
	
	deselectAll();
	
}


cancelBtn.addEventListener('click', (e) => {

	e.preventDefault();
	form.style.display = 'none';
	btns.style.display = 'block';
	deselectAll();
	return;

});


delBtn.addEventListener('click', (e) => {
	
	todos.splice(selectedIndex, 1); 
	
	let items = document.getElementsByTagName('li'); 	
	let itemToRemove = items[selectedIndex];
	
	items[selectedIndex].classList.remove('selected');

	list.removeChild(itemToRemove);
	
	editBtn.disabled = true;
	delBtn.disabled = true;
	
});


function getDomElements(){
	
	list = document.getElementById('list');

	btns = document.getElementById('btns');
	addBtn = document.getElementById('add-btn');
	editBtn = document.getElementById('edit-btn');
	delBtn = document.getElementById('del-btn');
	
	message = document.getElementById('message');
	inputField = document.getElementById('todo');
	okBtn = document.getElementById('ok');
	cancelBtn = document.getElementById('cancel');
	
	form = document.getElementById('form'); 
	
}

function populateList(){
	
	list.innerHTML = "";
	
	for(let i = 0; i < todos.length; i++){
		
		let item = document.createElement('li');
		item.textContent = todos[i];
		
		item.addEventListener('click', toggleSelect);
		
		list.appendChild(item);
		
	}	
}


function toggleSelect(e) {
		
	let selected = e.target.classList.contains('selected');
	
	deselectAll();
	
	if(selected){

		e.target.classList.remove('selected');

		editBtn.disabled = true;
		delBtn.disabled = true;
	
	} else {
		
		e.target.classList.add('selected');
		
		editBtn.disabled = false;
		delBtn.disabled = false;
		
		selectedIndex = todos.indexOf(e.target.textContent);

	}		

	console.log('selIndex: ' + selectedIndex);	
}

function deselectAll(){
	
	let items = document.getElementsByTagName('li');
		
	for(var i = 0; i < items.length; i++){
		items[i].classList.remove('selected');
	}
	
	selectedIndex = -1;
	
	editBtn.disabled = true;
	delBtn.disabled = true;
}







