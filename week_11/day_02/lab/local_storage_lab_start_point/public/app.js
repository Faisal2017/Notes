var init = function () {
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var ul = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.addEventListener('click', handleButtonClick);

  populate(ul, state);
}

var populate = function (ul, state) {
  // for each item in the state, invoke addItem
}

var addItem = function (ul, newItem) {
  // add an item to the ul
}

var handleButtonClick = function () {
  // get the value of the input box
  // get the "todo-list" ul element from the DOM
  // invoke addItem
  // invoke save
}

var save = function (item) {
  // save the item to localStorage 
  // NOTE You'll have to use JSON.stringify
}

window.addEventListener('load', init);

// ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
// HINT: you'll have to use a different data structure (an array of objects maybe?)
