import createTempl from '../Template/template.hbs';
import refs from './refs';

function updateMarkup(hits) {
  const markup = createTempl(hits);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;