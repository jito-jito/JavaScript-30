# 08 Fun width HTML5 canvas.

This challenge was use 'canvas' for draw with the mouse:

![canvas](https://user-images.githubusercontent.com/75919670/126929101-fd8103e9-3d80-47e6-bd2a-41ab11e73fe5.png)

Steps for complete the challenge:

#### 1.- Get DOM elements and set size of canvas:
    
    const canvas = document.getElementById('draw')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight



#### 2.- Event listeners, startDraw and stopDraw function

    canvas.addEventListener('mousedown', startDraw)
    canvas.addEventListener('mouseup', stopDraw)


I use the 'startDraw' function for get the first x,y cordinate to draw in canvas and execute a new event listener to start draw ('mousemove' listener for the 'draw' function).

    function startDraw(event) {
        console.log('start draw')
        
        pen.xi = event.clientX;
        pen.yi = event.clientY;
        canvas.addEventListener('mousemove', draw)
    }
    
	
I use 'stopDraw' function for remove 'mousemove' listener and stop draw:


    function stopDraw() {
        console.log('stop draw')
        canvas.removeEventListener('mousemove', draw)
    }



I create the 'pen' variable for save values x,y and width of the draw in canvas

	  let pen = {
		xi: 0,
		yi: 0,
		xf: 0,
		yf: 0,
		width: 5,
		isUp: this.width <= 0,
	  }

#### 3.- Start drawing, draw function

I use 'draw' function for draw circles in canvas with the mouse, each cicle have diferent color and size with which is calculating with the 'setWith' function:

    function draw(event) {
        ctx.beginPath();
        ctx.strokeStyle = `hsl(${pen.width}, 100%, 50%)`;
        ctx.arc(event.clientX, event.clientY, (pen.width/6), 0, Math.PI*2, true)
        //for circles was equals to the border
        ctx.fillStyle = `hsl(${pen.width}, 100%, 50%)`;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        setWidth()
        
        pen.xi = event.clientX;
        pen.yi = event.clientY;
    }

#### 4.- Seting size and color of the draw, setWidth function

I used 'setWidth' function for set number for the size an color used in the 'draw' function, the value save in the 'pen' variable:

    function setWidth() {
        if(pen.isUp) {
            pen.width += 5
            if(pen.width >= 360)
            pen.isUp = false 
        } else{
            pen.width -= 5
            if(pen.width <= 3) {
            pen.isUp = true 
            }
        } 
    }
