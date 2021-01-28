import createTempl from '../Template/template.hbs';
import refs from './refs';

function updateMarkup(images) {
  const markup = createTempl(images);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;