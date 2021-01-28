import css from "./style.css";
import refs from './js/refs'
import api from './js/api'
import updateMarkup from './js/markup'
console.log(api);

refs.form.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const inputValue = event.currentTarget
  api.query = inputValue.query.value
  
  api.fetchImages().then(hits => {
     createImages(hits)
  });
}

function createImages() {
  api.fetchImages().then(images => {
    updateMarkup(images)
  })
}