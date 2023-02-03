import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const formDataParsed = JSON.parse(localStorage.getItem(STORAGE_KEY));

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextValue, 500));
onRefreshPage();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formDataParsed);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextValue(evt) {
  formData.message = refs.textarea.value;
  formData.email = refs.input.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onRefreshPage() {
  if (formDataParsed) {
    refs.input.value = formDataParsed.email;
    refs.textarea.value = formDataParsed.message;
  }
}