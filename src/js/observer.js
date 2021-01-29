import refs from './refs'
import { createImages } from '../js/fetch'

const observer = () => {
   const options = {
   rootMargin : '20px',
  }
  const onEntry = ((entries) => {
    entries.forEach(entry => {
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
