window.addEventListener('load', start);
var globalNames = ['Um', 'Dois', 'Tres', 'Quatro'];

function start() {
  console.log('OI');
  console.log('Página totalmente carregada');
  var Nameinput1 = document.querySelector('#Nameinput1');
  Nameinput1.addEventListener('keyup', coutName);
  var form = document.querySelector('form');
  form.addEventListener('submit', prevenFormtSubmit);
}
function coutName(event) {
  console.log(event);
  var cout = event.target.value;
  var span = document.querySelector('#nameLength');
  span.textContent = cout.length;
}
function preventFormSubmit(event) {
  event.preventDefault();
  alert(Nameinput1.value + ' cadastrado com sucesso!');
}

var input1 = document.querySelector('#input1');
input1.value = 'Caroline A. Silva';
