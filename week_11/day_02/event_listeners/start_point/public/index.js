var buttonCounter = 0;

var handleButtonClick = function() {
  var pTag = document.querySelector('#button-result');
  buttonCounter++;
  pTag.innerText = 'Woa dude, I totally got clicked ' + buttonCounter + " times!";
}

var handleKeyPress = function() {
  var pTag = document.querySelector('#text-result');
  //var input = document.querySelector('input');
  pTag.innerText = this.value;
}

var handleSelectChanged = function(event) {
  var pTag = document.querySelector('#select-result');
  pTag.innerText = this.value + ". Excellent!";
  //event.target.value
  console.log(event);
}

var app = function(){
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var input = document.querySelector('input');
  input.addEventListener('keyup', handleKeyPress);

  var select = document.querySelector('select');
 // select.onchange = handleSelectChanged;
  select.addEventListener('change', handleSelectChanged);
  select.addEventListener('change', handleButtonClick);
}

window.addEventListener('load', app);
