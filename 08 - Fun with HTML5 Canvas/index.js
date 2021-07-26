const canvas = document.getElementById('draw')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let pen = {
    xi: 0,
    yi: 0,
    xf: 0,
    yf: 0,
    width: 5,
    isUp: this.width <= 0,
}


canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mouseup', stopDraw)


function startDraw(event) {
    console.log('start draw')

    pen.xi = event.clientX;
    pen.yi = event.clientY;
    canvas.addEventListener('mousemove', draw)
}

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

function stopDraw() {
    console.log('stop draw')
    canvas.removeEventListener('mousemove', draw)
}

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

