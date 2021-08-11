const $title = document.querySelector('div > h1')
const $hero = document.querySelector('.hero')
const shadow = 500

function start(e) {
  const { offsetWidth: width, offsetHeight: height } = $hero
  let { offsetX: x, offsetY: y } = e
  
  if ( this !== e.target ) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
    }

  const xShadow = Math.round((x / width * shadow) - (shadow / 2))
  const yShadow = Math.round((y / height * shadow) - (shadow / 2))

  $title.style.textShadow = `
    ${xShadow}px ${yShadow}px 0 rgba(255,0,255,0.7), 
    ${xShadow * -1}px ${yShadow}px 0 rgba(0,255,255,0.7),
    ${yShadow}px ${xShadow * -1}px 0 rgba(0,255,0,0.7),
    ${yShadow * -1}px ${xShadow}px 0 rgba(0,0,255,0.7)
    
  `    
}


$hero.addEventListener('mousemove', start) 
