import css from "./style.css";
import refs from './js/refs'
import api from './js/api'
import observer from './js/observer'
import * as basicLightbox from "basiclightbox";
import 'basiclightbox/dist/basicLightbox.min.css'


console.log(api);

refs.form.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const inputValue = event.currentTarget
  api.query = inputValue.query.value;
    observer()
  refs.form.reset()
  clearGallery()
}

refs.galleryList.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") {
    const imageSrc = event.target.dataset.src
    const instance = basicLightbox.create(`
    <div class="modal">
      <img class'light-box-img' src="${imageSrc}" alt="">
    </div>`);
    instance.show()
  }
});


function clearGallery() {
  refs.galleryList.innerHTML = ''
}
