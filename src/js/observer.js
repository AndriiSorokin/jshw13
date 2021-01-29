import refs from './refs'
import { createImages } from '../js/fetch'

const observer = () => {
  const options = {
   rootMargin : '30px',
  }
  const onEntry = ((entries) => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        console.log('hi');
        createImages()
      }
    })
  })
  const io = new IntersectionObserver(onEntry,options)
  io.observe(refs.observeBox)
}

export default observer
