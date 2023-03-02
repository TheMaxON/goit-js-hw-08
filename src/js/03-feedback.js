import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
populateForm();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  if (parsedData) {
    const formKeys = Object.keys(parsedData);
    formKeys.map(element => {
      document.querySelector(`[name='${element}']`).value = parsedData[element];
    });
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
