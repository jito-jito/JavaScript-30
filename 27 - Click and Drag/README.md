# 27 Click and drag 

This challenge was make a scroll a container with the mouse when we use click over the container.


//foto


Steps to complete the challenge:


#### 1.- Get DOM elements and create variables:
    
    // For get the scroll conatiner
    const container = document.querySelector('.items')
    // For save the last move over the container when we do click 
    let lastMove

#### 2.- Add event listeners:

    // For start to scroll
    container.addEventListener('mousedown', scrollStart)
    // For stop the scroll
    container.addEventListener('mouseup', scrollEnd)

#### 3.- Functions:

The 'scrollStart' function to begin the scroll when we do click over the container. 

    function scrollStart(e) {
    
        lastMove = e.clientX
        container.classList.add('active')
        container.addEventListener('mousemove', ScrollMove)
    
    }

The 'scrollMove' function execute after the 'scrollStart' function to scroll the container according to the last/current cordinate in the screen with the pointer of the mouse. 

    function ScrollMove(e) {
        
        let mov = 20  * 3
    
        if(e.clientX < lastMove) {
            console.log('+', e.movementX)
            container.scrollLeft += mov
            lastMove = e.clientX
            console.log(mov, container.scrollLeft)
        } else if (e.clientX > lastMove) {
            console.log('-', e.movementX)
            container.scrollLeft -= mov
            lastMove = e.clientX 
            console.log(mov, container.scrollLeft)
        }
    }
    
The 'scrollEnd' function stops the scroll when we do let out the click.

    function scrollEnd() {
        container.classList.remove('active')
        container.removeEventListener('mousemove', ScrollMove)
    }
    