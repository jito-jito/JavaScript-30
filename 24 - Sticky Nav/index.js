const main = document.querySelector('#main')
const logo = main.querySelector('.logo')
let ifFixed = false
let offset = main.offsetTop

window.addEventListener('scroll', (e) => {
  if(!ifFixed) {
    if(e.path[1].scrollY >= offset){
      console.log('fijar menú')
      ifFixed = true
      logo.style.maxWidth = `16%`;
      main.style.position = `fixed`;

    } 
  } 
  else {
    if(e.path[1].scrollY <= offset){
      console.log('ocultar menú')
      ifFixed = false
      logo.style.maxWidth = `0`;
      main.style.position = `relative`;
    }
  }
})