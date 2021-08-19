# 24 Sticky Nav

This challenge was put sticky and appear logo in the menu.


// foto 


Steps to complete the challenge


#### 1.- Get DOM elements and create variables:
    
    // For get menu element
    const main = document.querySelector('#main')
    // For get logo element
    const logo = main.querySelector('.logo')
    
    let ifFixed = false
    let offset = main.offsetTop


#### 2.- Add event listener and execute function:

I use scroll listener for verify when passed onto the menu element in the screen to put fixed and to appear the logo element 

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