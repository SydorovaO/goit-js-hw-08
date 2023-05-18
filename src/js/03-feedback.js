import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
populateForm();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  const email = refs.email.value;
  console.log(email);
  const message = refs.message.value;
  const formData = {
    email,
    message,
  };
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
