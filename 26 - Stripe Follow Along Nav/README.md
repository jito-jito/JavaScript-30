# 26 Stripe Follow Along Nav

This challenge was create a drop-down menu:

//foto


Steps to complete the challenge

#### 1.- Get DOM elements:

    const triggers = document.querySelectorAll('.cool > li')
    const background = document.querySelector('.dropdownBackground')
    const arrow = background.querySelector('.arrow')


#### 2.- Add event listeners:

These events execute the 'toggle menu' function for appear/disapear the menu when the pointer pass over the triggers elements
    
    triggers.forEach(a => a.addEventListener('mouseenter', toggleMenu))
    triggers.forEach(a => a.addEventListener('mouseleave', toggleMenu))


#### 3.- Toggle menu function:

This function recibes the drop down cordenates of the document for move a bakground element there and appear/disapear menu.

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