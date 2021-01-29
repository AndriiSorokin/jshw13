import api from '../js/api'
import updateMarkup from '../js/markup'

export function createImages() {
  api.fetchImages().then(hits => {
    updateMarkup(hits)
  })
}