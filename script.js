const inputElement = document.querySelector('input');
const paragraphElement = document.querySelector('input + p');
const buttomSubmitElement = document.querySelector('button[type=submit]');

buttomSubmitElement.onclick = function(event) {
  event.preventDefault();

  const emailRegExp = new RegExp(/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i);
  const isValidEmail = emailRegExp.test(inputElement.value);

  if(!isValidEmail) {
    paragraphElement.classList.add('error');
    inputElement.classList.add('error');
  } else {
    paragraphElement.classList.remove('error');
    inputElement.classList.remove('error');
  }
}
