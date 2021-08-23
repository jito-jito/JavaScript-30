const container = document.querySelector('.items')
let lastMove

function scrollStart(e) {

    lastMove = e.clientX
    container.classList.add('active')
    container.addEventListener('mousemove', ScrollMove)

}

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

function scrollEnd() {
    container.classList.remove('active')
    container.removeEventListener('mousemove', ScrollMove)
}

container.addEventListener('mousedown', scrollStart)
container.addEventListener('mouseup', scrollEnd)