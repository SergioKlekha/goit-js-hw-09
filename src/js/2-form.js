const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('.textarea');
form.addEventListener('input', handleInput);
form.addEventListener('submit', sendData);
returnInput();

let formData = {
  email: '',
  message: '',
};

function handleInput(event) {
  const EventKey = event.target.name;
  formData[EventKey] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function returnInput() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) {
    return;
  }

  formData = data;

  const { email, message } = form.elements;
  email.value = data.email;
  message.value = data.message;
}
function sendData(event) {
  event.preventDefault();

  const { email, message } = form.elements;
  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  console.log({ email: email.value, message: message.value });
  form.reset();
  formData = { email: '', message: '' };
}
