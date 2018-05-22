var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var ul = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleButtonClick;

  populate(ul, state);
}

var populate = function(ul, state){
  state.forEach(function(item){
    addItem(ul, item);
  });
}

var addItem = function(ul, input){
  var newItem = document.createElement('li');
  newItem.innerText = input;
  ul.appendChild(newItem);
}

var handleButtonClick = function(){
  var input = document.querySelector('#new-item');
  var ul = document.querySelector('#todo-list');
  addItem(ul, input.value);
  save(input.value);
}

var save = function(newItem){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  state.push(newItem);
  localStorage.setItem('todoList', JSON.stringify(state));
}

window.onload = init;
