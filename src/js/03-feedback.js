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
  const formData = createFormData(email.value, message.value);
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  const formData = createFormData(email.value, message.value);
  const formDataToString = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataToString);
}

function populateForm() {
  const savedObject = localStorage.getItem(STORAGE_KEY);
  const parsedObject = JSON.parse(savedObject);

  if (parsedObject) {
    refs.email.value = parsedObject.email;
    refs.message.value = parsedObject.message;
  }
}

// const formData = function (email, message) {
//   return {
//     email: email,
//     message: message,
//   };
// };

// function onFormSubmit(e) {
//   e.preventDefault();

//   formData(refs.email.value, refs.message.value);
//   console.log(formData);

//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }
// function onFormInput(e) {
//   formData = createFormData(refs.email.value, refs.message.value);
//   saveFormDataToLocalStorage();
// }

// function updateFormData() {}

// function saveFormDataToLocalStorage() {
//   const formDataToString = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, formDataToString);
// }

// function populateForm() {
//   const savedObject = localStorage.getItem(STORAGE_KEY);
//   const parsedObject = JSON.parse(savedObject);

//   if (parsedObject) {
//     email.value = parsedObject.email;
//     message.value = parsedObject.message;
//   }
// }
