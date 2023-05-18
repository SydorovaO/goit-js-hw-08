const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);
populateForm();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput() {
  const email = refs.email.value;
  const message = refs.message.value;
  const formData = {
    email,
    message,
  };
  const formDataToString = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', formDataToString);
}

function populateForm() {
  const savedObject = localStorage.getItem('feedback-form-state');
  const parsedObject = JSON.parse(savedObject);

  if (parsedObject) {
    refs.email.value = parsedObject.email;
    refs.message.value = parsedObject.message;
  }
}
