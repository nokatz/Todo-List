
let todos = [];
let selectedIndex;

let addBtn, editBtn, delBtn;
let form, inputField;
let list;
let editMode = false;

getDomElements();

editBtn.disabled = true;
delBtn.disabled = true;


addBtn.addEventListener('click', showForm);
editBtn.addEventListener('click', showForm);

function showForm(e){
	
	form.style.display = 'block';
	
	if(e.target.textContent === 'Add'){
		
		inputField.value = '';
		editMode = false;
	
	} else if (e.target.textContent === 'Edit'){
	
		editMode = true;
		inputField.value = todos[selectedIndex]; 
	
	}
}

okBtn.addEventListener('click', refreshList);


function refreshList(e){

	e.preventDefault();

	if(!editMode){
		
		todos.push(inputField.value);
		
		let li = document.createElement('li');
		li.textContent = inputField.value; 
		
		li.addEventListener('click', toggleSelect);
		
		list.appendChild(li);
		
	
	} else if(editMode){
		
		todos[selectedIndex] = inputField.value; 
		
		let items = document.getElementsByTagName('li');
		items[selectedIndex].textContent = inputField.value;
		
		items[selectedIndex].classList.remove('selected');
		
	}
	
	form.style.display = 'none';
	
}


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

	addBtn = document.getElementById('add-btn');
	editBtn = document.getElementById('edit-btn');
	delBtn = document.getElementById('del-btn');

	inputField = document.getElementById('todo');
	okBtn = document.getElementById('ok');
	
	form = document.getElementById('form'); 
	
}


function toggleSelect(e) {
		
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

		
	}







