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
}

refs.galleryList.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") {
    let modalSrc = event.target.dataset.src;

    const instance = basicLightbox.create(`
    <div class="modal">
      <img class'light-box-img' src="${modalSrc}" alt="">
    </div>`);
    instance.show();
  }
});

// const observeBox = refs.observeBox

// const observe = function () {
// const onEntry = ((entries) => {
//   entries.forEach(entry => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       createImages()
//     }
//   })
// })
// const options = {
//   threshold: 1
// }
// const io = new IntersectionObserver(onEntry,options)
// io.observe(observeBox)
// }
