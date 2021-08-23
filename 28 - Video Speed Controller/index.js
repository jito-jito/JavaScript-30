const speedbar = document.querySelector('.speed')
const videoPlayer = document.querySelector('.flex')

function setSpeed(e) {
    let height = (e.layerY * 100) / speedbar.offsetHeight 
    let speed = (e.layerY * 4) / speedbar.offsetHeight 
    speed = speed.toFixed(2)
    console.log(e.layerY)
    let bar = speedbar.querySelector('.speed-bar')
    bar.style.height = `${height}%`
    bar.innerText = `${speed}x`
    videoPlayer.playbackRate = speed
}


speedbar.addEventListener('mousemove', setSpeed)
