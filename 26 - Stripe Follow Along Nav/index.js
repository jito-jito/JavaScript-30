const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const arrow = background.querySelector('.arrow')

function toggleMenu(e) {
  console.log(this.querySelector('a'))
  console.log(this.querySelector('.dropdown'))
  const dropdown = this.querySelector('.dropdown')
  
  dropdown.classList.toggle('trigger-enter')
  let dropdownCoords = dropdown.getBoundingClientRect()

  background.classList.toggle('open')
  arrow.classList.toggle('open')
  setTimeout(() => dropdown.classList.toggle('trigger-enter-active'), 0)

  let coords = {
    top: dropdownCoords.top - 60,
    left: dropdownCoords.left ,
    width: dropdownCoords.width,
    heigth: dropdownCoords.height,
  }
  console.log(dropdown.getBoundingClientRect())

  background.style.width = `${coords.width}px`
  background.style.height = `${coords.heigth}px`
  background.style.transform = `translate(${coords.left}px, ${coords.top}px)`

}

triggers.forEach(a => a.addEventListener('mouseenter', toggleMenu))
triggers.forEach(a => a.addEventListener('mouseleave', toggleMenu))