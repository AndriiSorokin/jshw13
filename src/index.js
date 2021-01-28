import css from "./style.css";
import refs from './js/refs'
import api from './js/api'

refs.input.addEventListener('input', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  api.query = refs.input.value

  api.fetchImages();
  form.reset();
}