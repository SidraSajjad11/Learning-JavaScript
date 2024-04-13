let todoList = [];
displayItems();
function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push(
    {
      item: todoItem, 
      dueDate: todoDate
    }
  );
  inputElement.value = '';
  dateElement.value = ''; 
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    let todoList2 = JSON.parse(localStorage.getItem('todoList'));
    // console.log(todoList2);
    localStorage.removeItem('item');
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${todoList[i].item}</span>
      <span>${todoList[i].dueDate}</span>
      <button class="btn-delete" onclick = "
        todoList.splice(${i}, 1);
        displayItems();
        localStorage.clear();
        ">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml; 
}


// 
// 