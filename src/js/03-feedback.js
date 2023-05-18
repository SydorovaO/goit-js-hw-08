import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const { email, message, form } = refs;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
populateForm();

function createFormData(email, message) {
  return {
    email: email,
    message: message,
  };
}

function onFormSubmit(e) {
  e.preventDefault();

  const email = refs.email.value;
  const message = refs.message.value;

  const formData = createFormData(email, message);
  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onFormInput(e) {
  updateFormData();
  saveFormDataToLocalStorage();
}
function updateFormData() {
  formData = createFormData(refs.email.value, refs.message.value);
}

function saveFormDataToLocalStorage() {
  const formDataToString = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataToString);
}

function populateForm() {
  const savedObject = localStorage.getItem(STORAGE_KEY);
  const parsedObject = JSON.parse(savedObject);

  if (parsedObject) {
    email.value = parsedObject.email;
    message.value = parsedObject.message;
  }
}
