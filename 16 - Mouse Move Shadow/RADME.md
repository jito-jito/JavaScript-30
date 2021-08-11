# 16 Mouse move shadow

This challenge was create different shadows around of a title using the mouse move in the screen:

//foto


Steps to complete the challenge:


#### 1.- Get DOM elements and set variables:

    const $title = document.querySelector('div > h1')
    const $hero = document.querySelector('.hero')
    // For define maximun value for move the shadows around of the title 
    const shadow = 500

#### 2.- Event listener, start function

I use 'mousemove' listener in the hero element for recives the data of the mouse move and move the shadows with the 'start' function

    $hero.addEventListener('mousemove', start) 

#### 3.- Function start

This function recive the with and height of the 'hero' element for calculate the value for each shadow showed in the screen according to the shadow value. 

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
